
// let timeInterval;

// function startCount(){
//     timeInterval = setInterval(function(){
//         let counter = document.getElementById('count').innerHTML;
//         counter++;
//         document.getElementById('count').innerHTML = counter;
//     }, 100)
// }
// function stopCount(){
//     clearInterval(timeInterval);
// }

var [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.getElementById('displayTime');
let timer = null;

function watch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let hr = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = hr +":"+ min +":"+ sec;
}

function startWatch(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);
}

function  stopWatch(){
    clearInterval(timer);
}

function resetWatch(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

const displayDate = () => {
    setInterval(()=>{
        let date = new Date();
        document.getElementById('currentTime').innerHTML = date.toLocaleTimeString();
        console.log(log);
    },100)
}

displayDate();