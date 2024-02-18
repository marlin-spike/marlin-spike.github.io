
// worker.js

self.addEventListener('message', function(e) {
    if (e.data === 'start') {
      setInterval(function() {
        var hours    = new Date().getHours();
        var seconds  = new Date().getSeconds();
        var minutes  = new Date().getMinutes();
  
        var realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds;
  
        self.postMessage(realTime);
      }, 1000);
    }
  }, false);
  