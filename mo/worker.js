// worker.js

function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Set the end of the day to 23:59:59.999
  
    const timeRemaining = endOfDay - now;
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const milliseconds = timeRemaining % 1000;
    
    const fmilliseconds = milliseconds.toString().padStart(3, '0');
  
    const realTime = hours + ' : ' + minutes + ' : ' + seconds + ' : ' + fmilliseconds;
  
    self.postMessage(realTime);
  }
  
  setInterval(updateCountdown, 20);
  