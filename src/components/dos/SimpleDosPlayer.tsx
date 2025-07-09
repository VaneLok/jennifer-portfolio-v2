import { useEffect, useRef, useState } from 'react';

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
    let dosInstance: any = null;
    let cancelled = false;

    const loadAndRun = async () => {
      setStatus('Loading js-dos...');
      try {
        // Use the global Dos object loaded via <script src="/js-dos/js-dos.js"></script>
        const Dos = (window as any).Dos;
        if (!Dos) throw new Error('Dos API not found');
        const canvas = canvasRef.current;
        if (!canvas) throw new Error('Canvas not found');
        dosInstance = Dos(canvas, {
          wdosboxUrl: '/js-dos/wdosbox.js',
        });
        setStatus('Loading game bundle...');
        await dosInstance.run(props.bundleUrl);
        if (!cancelled) {
          setStatus('Game loaded!');
          setIsReady(true);
        }
      } catch (error) {
        setStatus('Failed to load game');
        console.error('js-dos error:', error);
      }
    };

    loadAndRun();
    return () => {
      cancelled = true;
      if (dosInstance && dosInstance.exit) {
        dosInstance.exit();
      }
    };
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
          <div style={{ marginBottom: '20px' }}>Loading SimCity...</div>
          <div style={{ fontSize: '12px' }}>{status}</div>
        </div>
      )}
    </div>
  );
}
