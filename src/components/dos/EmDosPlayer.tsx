import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    emulators: any;
    Dos: any;
  }
}

interface EmDosPlayerProps {
  width: number;
  height: number;
  bundleUrl: string;
  gameName: string;
}

export default function EmDosPlayer(props: EmDosPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<string>('Loading...');
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initEmulator = async () => {
      try {
        setStatus('Initializing emulator...');
        setError(null);

        // Try EM-DOSBox first (more reliable)
        if (window.emulators) {
          await tryEmDosBox();
          return;
        }

        // Fallback to js-dos
        if (window.Dos) {
          await tryJsDos();
          return;
        }

        // If neither is available, show fallback
        console.log('No emulator available, showing fallback');
        createFallbackButton();

      } catch (error) {
        console.error('All emulators failed:', error);
        setError(error instanceof Error ? error.message : 'Failed to load game');
        setStatus('Error loading game');
        createFallbackButton();
      }
    };

    const tryEmDosBox = async () => {
      setStatus('Starting EM-DOSBox...');
      
      // Configure emulators library
      window.emulators.pathPrefix = '/';

      // Use the emulators library to create a DOS instance
      const dos = await window.emulators.dosWorker();
      
      setStatus('Starting DOS system...');

      // Configure the canvas
      const canvas = document.createElement('canvas');
      canvas.width = props.width;
      canvas.height = props.height;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.imageRendering = 'pixelated';
      canvas.style.backgroundColor = '#000';

      // Clear container and add canvas
      const container = containerRef.current;
      if (container) {
        container.innerHTML = '';
        container.appendChild(canvas);
      }

      setStatus('Loading game file...');

      // Load the game bundle
      const response = await fetch(props.bundleUrl);
      if (!response.ok) {
        throw new Error(`Failed to load game: ${response.statusText}`);
      }

      const gameData = await response.arrayBuffer();
      
      setStatus('Starting game...');

      // Initialize the DOS worker with the game data
      await dos.run(gameData, canvas);

      setStatus('Game ready!');
      setIsReady(true);
    };

    const tryJsDos = async () => {
      setStatus('Starting js-dos...');
      
      const canvas = document.createElement('canvas');
      canvas.width = props.width;
      canvas.height = props.height;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.imageRendering = 'pixelated';
      canvas.style.backgroundColor = '#000';

      const container = containerRef.current;
      if (container) {
        container.innerHTML = '';
        container.appendChild(canvas);
      }

      setStatus('Loading game...');

      const dos = await window.Dos(canvas);
      await dos.run(props.bundleUrl);

      setStatus('Game ready!');
      setIsReady(true);
    };

    const createFallbackButton = () => {
      const container = containerRef.current;
      if (!container) return;

      // Create a retro-styled fallback button
      const fallbackDiv = document.createElement('div');
      fallbackDiv.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #c0c0c0, #808080);
        border: 2px outset #c0c0c0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'MS Sans Serif', sans-serif;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        user-select: none;
      `;

      fallbackDiv.innerHTML = `
        <div style="margin-bottom: 10px; font-size: 16px; font-weight: bold;">
          🎮 ${props.gameName}
        </div>
        <div style="margin-bottom: 15px; font-size: 12px; color: #000080;">
          Click to play in external window
        </div>
        <div style="font-size: 10px; color: #666;">
          (Opens in new tab)
        </div>
      `;

      // Add hover effect
      fallbackDiv.onmouseenter = () => {
        fallbackDiv.style.background = 'linear-gradient(45deg, #d0d0d0, #909090)';
      };
      fallbackDiv.onmouseleave = () => {
        fallbackDiv.style.background = 'linear-gradient(45deg, #c0c0c0, #808080)';
      };

      // Add click handler for external game
      fallbackDiv.onclick = () => {
        const gameUrls: { [key: string]: string } = {
          'DOOM': 'https://dos.zone/doom/',
          'Scrabble': 'https://dos.zone/scrabble/',
          'Oregon Trail': 'https://dos.zone/oregon-trail/'
        };

        const externalUrl = gameUrls[props.gameName] || 'https://dos.zone/';
        window.open(externalUrl, '_blank');
      };

      container.innerHTML = '';
      container.appendChild(fallbackDiv);
    };

    // Small delay to ensure DOM is ready
    setTimeout(initEmulator, 100);

  }, [props.bundleUrl, props.width, props.height, props.gameName]);

  return (
    <div style={{ 
      width: props.width, 
      height: props.height,
      position: 'relative',
      backgroundColor: '#000',
      border: '1px solid #808080'
    }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      />
      
      {!isReady && !error && (
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
          textAlign: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{ marginBottom: '20px', fontSize: '16px' }}>
            🎮 {props.gameName}
          </div>
          <div style={{ fontSize: '12px', marginBottom: '10px' }}>
            {status}
          </div>
          <div style={{ 
            fontSize: '10px', 
            opacity: 0.7,
            maxWidth: '80%',
            lineHeight: 1.4
          }}>
            Loading DOS emulator...
          </div>
        </div>
      )}
    </div>
  );
}
