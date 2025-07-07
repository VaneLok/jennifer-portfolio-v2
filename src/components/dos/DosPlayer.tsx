import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Dos: any;
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
        
        // Wait for Dos to be available
        let attempts = 0;
        const maxAttempts = 50;
        
        while (!window.Dos && attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!window.Dos) {
          throw new Error('js-dos library failed to load');
        }

        console.log('js-dos library loaded, creating instance...');
        
        // Create DOS instance
        const root = rootRef.current;
        if (!root) return;

        const dosInstance = window.Dos(root, {
          wdosboxUrl: "/js-dos/wdosbox.js",
        });

        setDosInstance(dosInstance);

        // Run the bundle
        console.log('Running bundle:', props.bundleUrl);
        dosInstance.run(props.bundleUrl);

        setIsLoading(false);

        // Clean up js-dos UI elements after a delay
        setTimeout(() => {
          const elements = root.querySelectorAll('.dos-ci-sidebar, .dos-ci-mobile-controls');
          elements.forEach(el => el.remove());
        }, 1000);

      } catch (err) {
        console.error('Error initializing DOS:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize DOS');
        setIsLoading(false);
      }
    };

    initDos();

    // Cleanup
    return () => {
      if (dosInstance && typeof dosInstance.stop === 'function') {
        dosInstance.stop();
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
        color: '#fff',
        fontSize: '14px',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <div>Error loading DOS game:</div>
          <div style={{ fontSize: '12px', marginTop: '10px' }}>{error}</div>
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
        color: '#fff',
        fontSize: '14px'
      }}>
        Loading DOS game...
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      style={{
        width: props.width,
        height: props.height,
        position: 'relative',
        backgroundColor: '#000',
      }}
    />
  );
}