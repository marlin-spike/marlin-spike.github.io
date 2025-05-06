$(document).ready(function () {
    function second_passed() {
        $('.clock').removeClass('is-off');
    }
    setTimeout(second_passed, 2000);

    $('.switcher').on('click', function (e) {
        e.preventDefault();
        $('.screen').toggleClass('glitch');
    });

    // Ensure worker.js exists in the correct directory
    const worker = new Worker("worker.js");

    // Change to your birthdate (format: YYYY-MM-DDTHH:mm:ss)
    worker.postMessage("2003-05-04T10:30:00");

    console.log("Worker started");

    worker.addEventListener("message", function (e) {
        let realTime = e.data;

        // Ensure the element with class "time" exists before updating it
         let timeElement = document.querySelector(".time");
                let time1Element = document.querySelector(".time1");

                if (timeElement) {
                    timeElement.innerText = realTime.realTime;
                    timeElement.setAttribute("data-time", realTime.realTime);
                }

                if (time1Element) {
                    time1Element.innerText = realTime.realTime1;
                    time1Element.setAttribute("time1", realTime.realTime1);
                }
    });
});
