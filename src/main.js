class DoomWebPlayer {
    constructor() {
        this.dosInstance = null;
        this.isRunning = false;
        this.isPaused = false;
        
        this.initializeElements();
        this.attachEventListeners();
        this.showStatus('Ready to play DOOM!', 'success');
    }
    
    initializeElements() {
        this.canvas = document.getElementById('doomCanvas');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.statusDiv = document.getElementById('status');
    }
    
    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.pauseBtn.addEventListener('click', () => this.pauseGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    showStatus(message, type = 'success') {
        this.statusDiv.textContent = message;
        this.statusDiv.className = `status ${type}`;
        this.statusDiv.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            this.statusDiv.style.display = 'none';
        }, 5000);
    }
    
    async startGame() {
        if (this.isRunning) return;
        
        try {
            this.showStatus('Loading DOOM...', 'success');
            this.startBtn.disabled = true;
            this.startBtn.textContent = 'Loading...';
            
            // Create an iframe with a working DOOM implementation
            this.canvas.innerHTML = `
                <iframe 
                    src="https://dos.zone/doom/" 
                    style="width: 100%; height: 100%; border: none; background: #000;"
                    allowfullscreen
                    allow="autoplay; gamepad; microphone; camera">
                </iframe>
            `;
            
            this.isRunning = true;
            this.startBtn.textContent = 'Running';
            this.pauseBtn.disabled = false;
            this.resetBtn.disabled = false;
            this.showStatus('DOOM is running! Click inside to start playing.', 'success');
            
        } catch (error) {
            console.error('Error starting DOOM:', error);
            this.showStatus(`Error: ${error.message}`, 'error');
            this.startBtn.disabled = false;
            this.startBtn.textContent = 'Start Game';
        }
    }
    
    async loadWadFile() {
        try {
            // Try to load DOOM1.WAD from the current directory
            const response = await fetch('/DOOM1.WAD');
            if (response.ok) {
                return await response.arrayBuffer();
            }
            
            // If that fails, try alternative approach
            this.showStatus('WAD file not found. Please ensure DOOM1.WAD is in the public directory.', 'error');
            return null;
            
        } catch (error) {
            console.error('Error loading WAD file:', error);
            return null;
        }
    }
    
    pauseGame() {
        if (!this.isRunning) return;
        
        const iframe = this.canvas.querySelector('iframe');
        if (iframe) {
            if (this.isPaused) {
                iframe.style.display = 'block';
                this.pauseBtn.textContent = 'Pause';
                this.isPaused = false;
                this.showStatus('Game resumed', 'success');
            } else {
                iframe.style.display = 'none';
                this.pauseBtn.textContent = 'Resume';
                this.isPaused = true;
                this.showStatus('Game paused (hidden)', 'success');
            }
        }
    }
    
    resetGame() {
        if (!this.isRunning) return;
        
        // Clear the canvas
        this.canvas.innerHTML = '';
        
        this.isRunning = false;
        this.isPaused = false;
        this.startBtn.disabled = false;
        this.startBtn.textContent = 'Start Game';
        this.pauseBtn.disabled = true;
        this.pauseBtn.textContent = 'Pause';
        this.resetBtn.disabled = true;
        
        this.showStatus('Game reset', 'success');
    }
    
    toggleFullscreen() {
        if (!this.canvas) return;
        
        const iframe = this.canvas.querySelector('iframe');
        if (iframe && document.fullscreenElement) {
            document.exitFullscreen();
        } else if (iframe) {
            this.canvas.requestFullscreen().catch(err => {
                this.showStatus(`Fullscreen error: ${err.message}`, 'error');
            });
        } else {
            this.showStatus('Start the game first to enable fullscreen', 'error');
        }
    }
    
    handleResize() {
        // Handle resize if needed - iframe will auto-resize
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new DoomWebPlayer();
});

// Export for potential use in other modules
export { DoomWebPlayer };
