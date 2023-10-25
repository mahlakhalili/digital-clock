const hour   = document.getElementById("hour")
const min    = document.getElementById("min")
const second = document.getElementById("second")
const ampm   = document.getElementById("ampm")

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if(h > 12){
        h = h - 12
        ampm = "PM";
    }

    h = h<10 ? "0" + h : h

    hour.innerText = h;
    min.innerText = m;
    second.innerText = s;
    ampm , (innerText = ampm)

    setTimeout(
        ()=>{
            updateClock()
        },1000
    )
}

updateClock()