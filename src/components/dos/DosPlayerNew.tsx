import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Dos: any;
    emulators: any;
  }
}

interface PlayerProps {
  width: number;
  height: number;
  bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dosInstance, setDosInstance] = useState<any>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const initDos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Starting DOOM initialization...');
        
        // Wait for js-dos to be available
        let attempts = 0;
        const maxAttempts = 100; // Increased attempts
        
        while (!window.Dos && !window.emulators && attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!window.Dos && !window.emulators) {
          throw new Error('js-dos library failed to load. Please refresh the page.');
        }

        console.log('js-dos library found, creating instance...');
        
        const root = rootRef.current;
        if (!root) {
          throw new Error('Root element not available');
        }

        // Clear any existing content
        root.innerHTML = '';

        let instance;
        
        // Try the modern js-dos v8 API first
        if (window.emulators) {
          console.log('Using js-dos v8 API for DOOM');
          const emulators = window.emulators.pathPrefix('/jennifer-amaya-inner-portfolio/');
          instance = await emulators.dosWorker();
        } else if (window.Dos) {
          console.log('Using js-dos legacy API for DOOM');
          instance = window.Dos(root, {
            wdosboxUrl: "https://v8.js-dos.com/latest/wdosbox.js",
          });
        } else {
          throw new Error('No compatible js-dos API found');
        }

        setDosInstance(instance);

        console.log('Loading DOOM bundle:', props.bundleUrl);
        
        // Load and run DOOM
        if (window.emulators && instance.run) {
          const ci = await instance.run(props.bundleUrl);
          if (ci && ci.dom) {
            root.appendChild(ci.dom);
          }
        } else if (instance.run) {
          await instance.run(props.bundleUrl);
        } else {
          throw new Error('Unable to run DOOM bundle');
        }

        setIsLoading(false);
        console.log('DOOM loaded successfully! 🔥');

        // Hide js-dos UI elements after load
        setTimeout(() => {
          const elementsToHide = root.querySelectorAll('.dos-ci-sidebar, .dos-ci-mobile-controls, .dos-ci-navbar');
          elementsToHide.forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });
        }, 2000);

      } catch (err) {
        console.error('Error loading DOOM:', err);
        setError(err instanceof Error ? err.message : 'Failed to load DOOM');
        setIsLoading(false);
      }
    };

    initDos();

    // Cleanup
    return () => {
      try {
        if (dosInstance) {
          if (typeof dosInstance.stop === 'function') {
            dosInstance.stop();
          } else if (typeof dosInstance.exit === 'function') {
            dosInstance.exit();
          }
        }
      } catch (e) {
        console.log('Error during DOOM cleanup:', e);
      }
    };
  }, [props.bundleUrl]);

  if (error) {
    return (
      <div style={{ 
        width: props.width, 
        height: props.height, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#00ff00',
        fontSize: '14px',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'monospace'
      }}>
        <div>
          <div>💀 DOOM.EXE ERROR 💀</div>
          <div style={{ fontSize: '12px', marginTop: '10px', color: '#ff0000' }}>
            {error}
          </div>
          <div style={{ fontSize: '10px', marginTop: '10px', color: '#888' }}>
            Try refreshing the page or enable cross-origin isolation in your browser
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div style={{ 
        width: props.width, 
        height: props.height, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#00ff00',
        fontSize: '16px',
        fontFamily: 'monospace'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div>🔥 Loading DOOM... 🔥</div>
          <div style={{ fontSize: '12px', marginTop: '10px' }}>
            Initializing DOS emulator...
          </div>
          <div style={{ fontSize: '10px', marginTop: '5px', color: '#888' }}>
            This may take a moment
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={rootRef} 
      style={{ 
        width: props.width, 
        height: props.height,
        backgroundColor: '#000',
        border: '2px solid #333'
      }}
    />
  );
}
