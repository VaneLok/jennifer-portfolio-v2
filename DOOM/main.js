// Simplified DOOM Web Player - Focus on what works
class DoomWebPlayer {
    constructor() {
        this.isRunning = false;
        
        this.initializeElements();
        this.attachEventListeners();
        this.showStatus('Ready to play DOOM! Click Start Game for instant DOOM.', 'success');
    }
    
    initializeElements() {
        this.canvas = document.getElementById('doomCanvas');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.statusDiv = document.getElementById('status');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }
    
    showStatus(message, type = 'success') {
        this.statusDiv.textContent = message;
        this.statusDiv.className = `status ${type}`;
        this.statusDiv.style.display = 'block';
        
        setTimeout(() => {
            this.statusDiv.style.display = 'none';
        }, 2000); // Faster auto-hide
    }
    
    async startGame() {
        if (this.isRunning) return;
        
        this.showStatus('Loading DOOM - Get ready to rip and tear!', 'success');
        this.startBtn.disabled = true;
        this.startBtn.textContent = 'Loading DOOM...';
        
        // Load working DOOM directly
        this.loadWorkingDoom();
    }
    
    loadWorkingDoom() {
        // Load multiple DOOM options for best compatibility
        const doomOptions = [
            'https://silentspacemarine.com/',
            'https://dos.zone/doom/',
            'https://www.retrogames.cc/embed/40189-doom.html'
        ];
        
        // Clean, full-screen DOOM experience
        this.canvas.innerHTML = `
            <div style="width: 100%; height: 100%; position: relative; background: #000;">
                <iframe 
                    src="${doomOptions[0]}" 
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    allow="autoplay; fullscreen; gamepad; clipboard-write">
                </iframe>
            </div>
        `;
        
        this.isRunning = true;
        this.startBtn.style.display = 'none';
        this.resetBtn.disabled = false;
        this.resetBtn.style.display = 'block';
        this.showStatus('DOOM is ready!', 'success');
    }
    
    resetGame() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.startBtn.textContent = 'Start Game';
        this.startBtn.style.display = 'block';
        this.resetBtn.disabled = true;
        
        // Clear the canvas
        this.canvas.innerHTML = '';
        
        this.showStatus('Game reset - Click Start Game to play again!', 'success');
    }
    
    toggleFullscreen() {
        if (!this.canvas) return;
        
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            this.canvas.requestFullscreen().catch(err => {
                this.showStatus(`Fullscreen error: ${err.message}`, 'error');
            });
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DoomWebPlayer();
});

export { DoomWebPlayer };
