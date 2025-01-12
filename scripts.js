/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date(); 
    let h = today.getHours(); // hour
    let m = today.getMinutes(); // minute
    let s = today.getSeconds(); // second
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s; // displays time
    
    var year = today.getFullYear(); // year
    var month = today.getMonth() + 1; // month
    var date = today.getDate(); // day
    month = checkTime(month);
    document.getElementById('date').innerHTML =  date + "/" + month + "/" + year; // displays date

    
    setTimeout(startTime, 1000); // updates every second
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



