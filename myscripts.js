//click
  document.getElementById('button1').onclick = function() {
    document.getElementById('demo').innerHTML = "I'm right";
}
document.getElementById('button2').onclick = function() {
    document.getElementById('demo').innerHTML = "No, I'm right!";
}

//hover
function myFunction() {    
    alert("Hey, I told you not to hover over me!");
}

//check the password
function passwordtest() {
    document.getElementById('username').value;
    const user = document.getElementById('username').value;
    document.getElementById('password').value;
    const pw = document.getElementById('password').value;
    if(pw != 12345678) {
        alert('Sorry Incorrect Password')
    }
    else {
        document.getElementById('change').innerHTML = "Welcome " + user + "!";
    }
}

//bonus sphere calculator
function volumeCalc () {
    let radius = document.getElementById('input').value;
    let volume = 0;
    volume = (4/3) * 3.14159265359 * (radius *radius * radius);
    alert("Volume = " + volume);
}
