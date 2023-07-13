
var currentpoint = 0;


const timeCount = document.getElementById('time-count');
function start() {
    document.getElementById("mole").style.visibility = 'hidden';
    document.getElementById("mud").style.visibility = 'hidden';
    document.getElementById("start").style.visibility = 'hidden';



    for (var i = 0; i < 2; i++) {
        document.getElementsByClassName("points")[i].style.visibility = "visible";
    }

    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("dirt")[i].style.visibility = "visible";
    }
    setInterval(() => {
        var random = Math.floor(Math.random() * 6) + 1;
        document.getElementById("mole" + random).style.visibility = "visible";
        setTimeout(() => {
            for (var i = 0; i < 6; i++) {
                document.getElementsByClassName("mole")[i].style.visibility = "hidden";
            }
        }, 900);
    }, 1000);
}

function clicked() {
    document.getElementById("currentpoint").innerHTML = currentpoint++;
    if (currentpoint === 20) {
        document.getElementById("currentpoint").innerHTML = " " + currentpoint + "You Win!!!";

        alert('Your Score  is ' + currentpoint);
        location.reload();
    }

}


/*
let interval;
function renderTimer() {
    if (counter > 0) {
        counter--;
        timerContainer.textContent = counter;
    }
    else {
        clearInterval(interval);
    }
}

interval = setInterval(renderTimer, 1000);*/
