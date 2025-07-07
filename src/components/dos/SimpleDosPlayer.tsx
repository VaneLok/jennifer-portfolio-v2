import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    emulators: any;
    Dos: any;
  }
}

interface SimpleDosPlayerProps {
  width: number;
  height: number;
  bundleUrl: string;
}

export default function SimpleDosPlayer(props: SimpleDosPlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<string>('Loading...');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initEmulator = async () => {
      try {
        setStatus('Initializing emulator...');
        
        // Simple iframe-based approach as fallback
        if (!window.Dos && !window.emulators) {
          setStatus('Loading game in iframe...');
          createIframePlayer();
          return;
        }

        // Try js-dos if available
        if (window.Dos) {
          setStatus('Starting DOS...');
          await initJsDos();
        } else {
          setStatus('Emulator not available');
        }

      } catch (error) {
        console.error('DOS emulator error:', error);
        setStatus('Failed to load game');
        // Fallback to iframe
        createIframePlayer();
      }
    };

    const createIframePlayer = () => {
      const container = canvasRef.current?.parentElement;
      if (!container) return;

      // Create a simple message for now
      const messageDiv = document.createElement('div');
      messageDiv.style.cssText = `
        width: ${props.width}px;
        height: ${props.height}px;
        background: #000;
        color: #00ff00;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
      `;

      messageDiv.innerHTML = `
        <div style="margin-bottom: 20px;">🎮 DOOM</div>
        <div style="font-size: 12px; line-height: 1.4;">
          Click here to play DOOM<br/>
          (Opens in new window)
        </div>
      `;

      messageDiv.style.cursor = 'pointer';
      messageDiv.onclick = () => {
        // Open a simple DOS games site as fallback
        window.open('https://dos.zone/doom/', '_blank');
      };

      container.replaceChild(messageDiv, canvasRef.current!);
      setStatus('Ready to play!');
      setIsReady(true);
    };

    const initJsDos = async () => {
      try {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Simple js-dos initialization
        const dos = await window.Dos(canvas);
        
        setStatus('Loading game file...');
        
        // Try to run the bundle
        await dos.run(props.bundleUrl);
        
        setStatus('Game loaded!');
        setIsReady(true);

      } catch (error) {
        console.error('js-dos initialization failed:', error);
        throw error;
      }
    };

    initEmulator();

  }, [props.bundleUrl, props.width, props.height]);

  return (
    <div style={{ 
      width: props.width, 
      height: props.height,
      position: 'relative',
      backgroundColor: '#000'
    }}>
      <canvas
        ref={canvasRef}
        width={props.width}
        height={props.height}
        style={{ 
          display: isReady ? 'block' : 'none',
          width: '100%',
          height: '100%'
        }}
      />
      
      {!isReady && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          color: '#00ff00',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Courier New", monospace',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '20px' }}>🎮 DOOM</div>
          <div style={{ fontSize: '12px' }}>{status}</div>
          <div style={{ 
            fontSize: '10px', 
            marginTop: '20px',
            opacity: 0.7,
            maxWidth: '80%',
            lineHeight: 1.4
          }}>
            Note: DOS games require modern browser features.<br/>
            If loading fails, try refreshing the page.
          </div>
        </div>
      )}
    </div>
  );
}
