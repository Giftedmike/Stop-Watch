
let timeInterval;

function startCount(){
    timeInterval = setInterval(function(){
        let counter = document.getElementById('count').innerHTML;
        counter++;
        document.getElementById('count').innerHTML = counter;
    }, 100)
}
function stopCount(){
    clearInterval(timeInterval);
}