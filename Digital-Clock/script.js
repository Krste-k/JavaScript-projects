function clock() {
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const second = document.getElementById('second');
    const ampm = document.getElementById('ampm');
    const hrs = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
ampm.style.fontSize = '50px'
ampm.style.padding = '30px'
ampm.style.color = 'black'
    let am = "AM";

    if (hrs > 12) {
        
        let am = 'PM'
    
    hours.innerHTML = (hrs < 10) ? "0" + hrs : hrs;
    minutes.innerHTML = (min < 10) ? "0" + min : min;
    second.innerHTML = (sec < 10) ? "0" + sec : sec;
    ampm.innerHTML = am;
    }
}

const interval = setInterval(clock, 1000)

