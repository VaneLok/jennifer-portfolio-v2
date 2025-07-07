import { useEffect, useRef } from 'react';

interface WorkingDosPlayerProps {
  width: number;
  height: number;
  bundleUrl: string;
  gameName: string;
}

export default function WorkingDosPlayer(props: WorkingDosPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Always show the working fallback immediately
    createWorkingFallback();
  }, [props.gameName]);

  const createWorkingFallback = () => {
    const container = containerRef.current;
    if (!container) return;

    // Create a Windows 98 style game launcher
    const gameDiv = document.createElement('div');
    gameDiv.style.cssText = `
      width: 100%;
      height: 100%;
      background: #c0c0c0;
      border: 2px inset #c0c0c0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'MS Sans Serif', sans-serif;
      font-size: 14px;
      text-align: center;
      position: relative;
      overflow: hidden;
    `;

    // Create game-specific backgrounds and styles
    const gameConfigs = {
      'DOOM': {
        bg: 'linear-gradient(45deg, #8B0000, #FF0000, #8B0000)',
        icon: '👹',
        color: '#fff',
        url: 'https://dos.zone/doom/'
      },
      'Scrabble': {
        bg: 'linear-gradient(45deg, #2E8B57, #90EE90, #2E8B57)',
        icon: '🔤',
        color: '#000',
        url: 'https://dos.zone/scrabble/'
      },
      'Oregon Trail': {
        bg: 'linear-gradient(45deg, #8B4513, #DEB887, #8B4513)',
        icon: '🏔️',
        color: '#000',
        url: 'https://dos.zone/oregon-trail/'
      }
    };

    const config = gameConfigs[props.gameName as keyof typeof gameConfigs] || gameConfigs['DOOM'];

    gameDiv.innerHTML = `
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${config.bg};
        opacity: 0.1;
      "></div>
      
      <div style="
        position: relative;
        z-index: 1;
        background: rgba(192, 192, 192, 0.95);
        border: 2px inset #c0c0c0;
        padding: 30px;
        border-radius: 0;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      ">
        <div style="
          font-size: 24px; 
          margin-bottom: 15px;
          color: ${config.color};
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        ">
          ${config.icon} ${props.gameName}
        </div>
        
        <div style="
          font-size: 12px; 
          margin-bottom: 20px;
          color: #000080;
          line-height: 1.4;
        ">
          Launch classic DOS game<br/>
          in external window
        </div>
        
        <button style="
          background: linear-gradient(to bottom, #dfdfdf, #c0c0c0);
          border: 2px outset #c0c0c0;
          padding: 8px 16px;
          font-family: 'MS Sans Serif', sans-serif;
          font-size: 12px;
          cursor: pointer;
          color: #000;
          margin-bottom: 10px;
        " 
        onmouseover="this.style.background='linear-gradient(to bottom, #efefef, #d0d0d0)'"
        onmouseout="this.style.background='linear-gradient(to bottom, #dfdfdf, #c0c0c0)'"
        onmousedown="this.style.border='2px inset #c0c0c0'"
        onmouseup="this.style.border='2px outset #c0c0c0'"
        onclick="window.open('${config.url}', '_blank', 'width=800,height=600')">
          ▶️ Play ${props.gameName}
        </button>
        
        <div style="
          font-size: 9px; 
          color: #666;
          margin-top: 10px;
          line-height: 1.3;
        ">
          Note: Opens in new browser tab<br/>
          for best compatibility
        </div>
      </div>
    `;

    container.innerHTML = '';
    container.appendChild(gameDiv);
  };

  return (
    <div style={{ 
      width: props.width, 
      height: props.height,
      position: 'relative',
      backgroundColor: '#c0c0c0',
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
    </div>
  );
}
