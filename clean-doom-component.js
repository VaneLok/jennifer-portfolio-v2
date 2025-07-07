// Clean DOOM Component - Minimal, Authentic Look
// For integration into existing websites

class CleanDoomComponent {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.isRunning = false;
        
        if (!this.container) {
            console.error(`Container with id "${containerId}" not found`);
            return;
        }
        
        this.initializeCleanDoom();
    }
    
    initializeCleanDoom() {
        // Create the clean DOOM interface
        this.container.innerHTML = `
            <div class="clean-doom-player" style="
                position: relative;
                width: 100%;
                height: 600px;
                background: #000;
                border: 1px solid #333;
                overflow: hidden;
                font-family: monospace;
            ">
                <iframe class="doom-game-frame" style="
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: #000;
                    display: none;
                "></iframe>
                
                <div class="doom-start-screen" style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle, #1a0000, #000);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    transition: opacity 0.5s ease;
                ">
                    <div style="
                        font-size: 3rem;
                        font-weight: bold;
                        color: #8B0000;
                        text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
                        margin-bottom: 20px;
                        letter-spacing: 3px;
                    ">DOOM</div>
                    
                    <div style="
                        font-size: 1rem;
                        color: #666;
                        margin-bottom: 30px;
                        text-align: center;
                    ">Original 1993 Experience</div>
                    
                    <button class="doom-start-button" style="
                        padding: 12px 30px;
                        font-size: 1.1rem;
                        background: linear-gradient(45deg, #8B0000, #660000);
                        border: 1px solid #444;
                        color: #fff;
                        font-family: monospace;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    ">Start Game</button>
                    
                    <div class="loading-text" style="
                        font-size: 1rem;
                        color: #8B0000;
                        margin-top: 20px;
                        display: none;
                    ">Loading DOOM...</div>
                </div>
                
                <div class="doom-minimal-controls" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    z-index: 15;
                    display: none;
                ">
                    <button class="doom-mini-btn reset-btn" style="
                        display: block;
                        margin-bottom: 5px;
                        padding: 5px 10px;
                        background: rgba(0,0,0,0.7);
                        border: 1px solid #444;
                        color: #fff;
                        font-family: monospace;
                        font-size: 0.8rem;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">Reset</button>
                    
                    <button class="doom-mini-btn fullscreen-btn" style="
                        display: block;
                        padding: 5px 10px;
                        background: rgba(0,0,0,0.7);
                        border: 1px solid #444;
                        color: #fff;
                        font-family: monospace;
                        font-size: 0.8rem;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">Full</button>
                </div>
            </div>
        `;
        
        // Add hover effects
        const style = document.createElement('style');
        style.textContent = `
            .doom-start-button:hover {
                background: linear-gradient(45deg, #660000, #440000) !important;
                border-color: #666 !important;
                transform: translateY(-2px);
            }
            .doom-mini-btn:hover {
                background: rgba(139,0,0,0.7) !important;
                border-color: #666 !important;
            }
        `;
        document.head.appendChild(style);
        
        this.initializeElements();
        this.attachEvents();
    }
    
    initializeElements() {
        this.gameFrame = this.container.querySelector('.doom-game-frame');
        this.startScreen = this.container.querySelector('.doom-start-screen');
        this.startButton = this.container.querySelector('.doom-start-button');
        this.loadingText = this.container.querySelector('.loading-text');
        this.controls = this.container.querySelector('.doom-minimal-controls');
        this.resetBtn = this.container.querySelector('.reset-btn');
        this.fullscreenBtn = this.container.querySelector('.fullscreen-btn');
    }
    
    attachEvents() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    
    startGame() {
        if (this.isRunning) return;
        
        this.startButton.style.display = 'none';
        this.loadingText.style.display = 'block';
        
        // Load DOOM
        this.gameFrame.src = 'https://silentspacemarine.com/';
        this.gameFrame.style.display = 'block';
        
        // Hide start screen
        setTimeout(() => {
            this.startScreen.style.opacity = '0';
            setTimeout(() => {
                this.startScreen.style.display = 'none';
                this.controls.style.display = 'block';
            }, 500);
        }, 2000);
        
        this.isRunning = true;
    }
    
    resetGame() {
        this.isRunning = false;
        this.gameFrame.style.display = 'none';
        this.gameFrame.src = '';
        this.startScreen.style.display = 'flex';
        this.startScreen.style.opacity = '1';
        this.startButton.style.display = 'block';
        this.loadingText.style.display = 'none';
        this.controls.style.display = 'none';
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
}

// Make it available globally
window.CleanDoomComponent = CleanDoomComponent;
