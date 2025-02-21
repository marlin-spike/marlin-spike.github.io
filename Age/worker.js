self.onmessage = function (event) {
    const dob = new Date(event.data);

    function updateAge() {
        const now = new Date();
        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();
        let hours = now.getHours() - dob.getHours();
        let minutes = now.getMinutes() - dob.getMinutes();
        let seconds = now.getSeconds() - dob.getSeconds();
        let milliseconds = now.getMilliseconds() - dob.getMilliseconds();

        if (milliseconds < 0) {
            milliseconds += 1000;
            seconds--;
        }
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }

        const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
        const realTime = `${years}Y : ${months}M : ${days}D`;
        const realTime1 = `${hours}H : ${minutes}M : ${seconds}S : ${formattedMilliseconds}ms`;

        self.postMessage({ realTime, realTime1 });
    }

    // Update every 20 milliseconds
    setInterval(updateAge, 20);
};
