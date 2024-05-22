// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


// countdown
document.addEventListener('DOMContentLoaded', function() {
        // Set the date we're counting down to
        var countDownDate = new Date("Jun 30, 2024 12:00:00").getTime();

        // Update the count down every 1 second
        var countdownFunction = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the corresponding elements
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById("countdown").innerHTML = "The Wedding Day is Here!";
            }
        }, 1000);
    });

    document.getElementById("whatsapp-button").addEventListener("click", function() {
        var message = document.getElementById("message").value;
        var encodedMessage = encodeURIComponent(message);
        window.location.href = "https://wa.me/?text=" + encodedMessage;
    });


    document.getElementById("show-bank-details").addEventListener("click", function() {
        var bankDetails = document.getElementById("bank-details");
        if (bankDetails.style.display === "none") {
            bankDetails.style.display = "block";
            document.getElementById("show-bank-details").textContent = "Hide Bank Details";
        } else {
            bankDetails.style.display = "none";
            document.getElementById("show-bank-details").textContent = "Show Bank Details";
        }
    });


