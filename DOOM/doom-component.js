// Standalone DOOM Web Player Component
// Copy this file to your project and include it in your HTML

class DoomWebPlayer {
    constructor(containerId) {
        this.containerId = containerId;
        this.isRunning = false;
        this.container = document.getElementById(containerId);
        
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found`);
            return;
        }
        
        this.initializePlayer();
    }
    
    initializePlayer() {
        // Create the player HTML structure
        this.container.innerHTML = `
            <div class="doom-player" style="
                max-width: 1200px;
                width: 100%;
                margin: 0 auto;
                font-family: 'Courier New', monospace;
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: #00ff00;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 0 20px rgba(255,0,0,0.3);
            ">
                <div class="doom-header" style="
                    text-align: center;
                    padding: 20px;
                    background: #000;
                    border-bottom: 2px solid #333;
                ">
                    <h1 style="
                        font-size: 3rem;
                        font-weight: bold;
                        color: #ff0000;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        margin: 0 0 10px 0;
                    ">DOOM</h1>
                    <p style="
                        font-size: 1.2rem;
                        color: #888;
                        margin: 0;
                    ">Original 1993 Experience - Authentic DOS Version</p>
                </div>
                
                <div class="doom-controls" style="
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    padding: 20px;
                    background: #111;
                ">
                    <button id="doom-start-btn" class="doom-btn" style="
                        padding: 12px 24px;
                        background: linear-gradient(45deg, #ff0000, #cc0000);
                        border: none;
                        border-radius: 4px;
                        color: white;
                        font-family: 'Courier New', monospace;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s;
                        text-transform: uppercase;
                    ">Start Game</button>
                    <button id="doom-reset-btn" class="doom-btn" disabled style="
                        padding: 12px 24px;
                        background: #666;
                        border: none;
                        border-radius: 4px;
                        color: white;
                        font-family: 'Courier New', monospace;
                        font-weight: bold;
                        cursor: not-allowed;
                        text-transform: uppercase;
                    ">Reset</button>
                    <button id="doom-fullscreen-btn" class="doom-btn" style="
                        padding: 12px 24px;
                        background: linear-gradient(45deg, #ff0000, #cc0000);
                        border: none;
                        border-radius: 4px;
                        color: white;
                        font-family: 'Courier New', monospace;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s;
                        text-transform: uppercase;
                    ">Fullscreen</button>
                </div>
                
                <div class="doom-game-area" style="
                    background: #000;
                    border: 2px solid #333;
                    margin: 0 20px 20px 20px;
                    border-radius: 4px;
                ">
                    <div id="doom-canvas" style="
                        width: 100%;
                        height: 600px;
                        background: #000;
                        border: 1px solid #444;
                    "></div>
                </div>
                
                <div class="doom-instructions" style="
                    background: #111;
                    border: 1px solid #333;
                    border-radius: 4px;
                    padding: 20px;
                    margin: 0 20px 20px 20px;
                ">
                    <h3 style="color: #ff0000; margin-bottom: 15px;">Original DOOM Controls</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9em;">
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">↑/↓</span> Move Forward/Backward</div>
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">←/→</span> Turn Left/Right</div>
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">Ctrl</span> Shoot/Fire</div>
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">Space</span> Use/Open Doors</div>
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">Shift</span> Run</div>
                        <div><span style="background: #333; padding: 2px 6px; border-radius: 3px; color: #00ff00;">Tab</span> Map</div>
                    </div>
                </div>
            </div>
        `;
        
        // Add button hover effects
        const style = document.createElement('style');
        style.textContent = `
            .doom-btn:hover:not(:disabled) {
                background: linear-gradient(45deg, #cc0000, #990000) !important;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(255,0,0,0.3);
            }
        `;
        document.head.appendChild(style);
        
        this.initializeElements();
        this.attachEventListeners();
    }
    
    initializeElements() {
        this.canvas = document.getElementById('doom-canvas');
        this.startBtn = document.getElementById('doom-start-btn');
        this.resetBtn = document.getElementById('doom-reset-btn');
        this.fullscreenBtn = document.getElementById('doom-fullscreen-btn');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    
    startGame() {
        if (this.isRunning) return;
        
        this.startBtn.disabled = true;
        this.startBtn.textContent = 'Loading DOOM...';
        
        // Load working DOOM directly
        this.loadWorkingDoom();
    }
    
    loadWorkingDoom() {
        // Clean, full-screen DOOM experience
        this.canvas.innerHTML = `
            <div style="width: 100%; height: 100%; position: relative; background: #000;">
                <iframe 
                    src="https://silentspacemarine.com/" 
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            </div>
        `;
        
        this.isRunning = true;
        this.startBtn.style.display = 'none';
        this.resetBtn.disabled = false;
        this.resetBtn.style.background = 'linear-gradient(45deg, #ff0000, #cc0000)';
        this.resetBtn.style.cursor = 'pointer';
    }
    
    resetGame() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.startBtn.textContent = 'Start Game';
        this.startBtn.style.display = 'block';
        this.resetBtn.disabled = true;
        this.resetBtn.style.background = '#666';
        this.resetBtn.style.cursor = 'not-allowed';
        
        // Clear the canvas
        this.canvas.innerHTML = '';
    }
    
    toggleFullscreen() {
        if (!this.canvas) return;
        
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            this.canvas.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        }
    }
}

// Make it available globally
window.DoomWebPlayer = DoomWebPlayer;
