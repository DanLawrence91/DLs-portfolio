var timer = $("#dateTime")

function startTimer() {
    setInterval(function() {
        var timeDate = moment().format("HH:mm:ss, Do MMMM YYYY");
        timer.text(timeDate);
    }, 1000)    
}

startTimer()