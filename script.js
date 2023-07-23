body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.progress-container {
  width: 300px;
  margin: 20px;
  text-align: center;
}

.label {
  font-size: 20px;
  font-weight: bold;
}

.progress-bar {
  width: 100%;
  height: 30px;
  background-color: #f1f1f1; /* Light grey background for progress bar container */
  border: 2px solid #000000;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4CAF50; /* Green background for progress bar */
  border-radius: 5px;
  transition: width 0.3s;
}

.percentage {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.emoji-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 9999;
  pointer-events: none;
}

.emoji {
  font-size: 160px;
  transform-origin: center;
  animation: growAndSpin 2s forwards, fadeOut 2s 2s forwards;
}

@keyframes growAndSpin {
  0% { opacity: 0; transform: scale(0.1) rotate(0deg); }
  100% { opacity: 1; transform: scale(1) rotate(360deg); }
}

@keyframes fadeOut {
  to { opacity: 0; }
}

.fade-out {
  animation: fadeOut 2s forwards;
}
