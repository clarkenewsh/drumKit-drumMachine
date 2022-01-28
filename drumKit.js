// TASK LIST
//     1 - Create html placeholders divs with drum keys
//     2 - Get element by id for each drum 
//     3 - Create event listener function with switch statement to play a certain sound when a key code is pressed that relates to the div with that assigned key code data
//     4 - html audio tags - research how to use these 
//     5 - Drum animations, get elements and then animate 
//     6 - Drum sounds event listener based on keycode and the the resulting key value
//     8 - Stretch Goal - Create a drum machine using css, utilising click listeners


// get audio elements
const boom = document.querySelector('#boom');
const clap = document.querySelector('#clap');
const hihat = document.querySelector('#hihat');
const kick = document.querySelector('#kick');
const openhat = document.querySelector('#openhat');
const ride = document.querySelector('#ride');
const snare = document.querySelector('#snare');
const tink = document.querySelector('#tink');
const tom = document.querySelector('#tom');

// animate keys
const animateKey = document.querySelectorAll('.drum-key');


// Listen for key press events and play audio
document.addEventListener('keypress', (e) => {
    let keyCode = e.code;
    // console.log(keyCode);

    if (keyCode == 'KeyA') {
        // play sound by getting the html audio element 
        console.log(keyCode);
        // Play audio
        boom.currentTime = 0;
        boom.play();
        // console.log(animateKey);
        animateKey[0].style.borderColor = "violet";
 

    } else if (keyCode == 'KeyS') {
        console.log(keyCode);
        clap.currentTime = 0;
        clap.play();
        animateKey[1].style.borderColor = "greenyellow";

    } else if (keyCode == 'KeyD') {
        console.log(keyCode);
        hihat.currentTime = 0;
        hihat.play();
        animateKey[2].style.borderColor = "cyan";
        

    } else if (keyCode == 'KeyF') {
        // console.log(keyCode);
        kick.currentTime = 0;
        kick.play();
        animateKey[3].style.borderColor = "orange";
        

    } else if (keyCode == 'KeyG') {
        // console.log(keyCode);
        openhat.currentTime = 0;
        openhat.play();
        animateKey[4].style.borderColor = "purple";
         

    } else if (keyCode == 'KeyH') {
        // console.log(keyCode);
        ride.currentTime = 0;
        ride.play();
        animateKey[5].style.borderColor = "indianred";
        

    } else if (keyCode == 'KeyJ') {
        // console.log(keyCode);
        snare.currentTime = 0;
        snare.play();
        animateKey[6].style.borderColor = "lightskyblue";
        
j

    } else if (keyCode == 'KeyK') {
        // console.log(keyCode);
        tink.currentTime = 0;
        tink.play();
        animateKey[7].style.borderColor = "lightgrey";

    } else if (keyCode == 'KeyL') {
        // console.log(keyCode);
        tom.currentTime = 0;
        tom.play();
        animateKey[8].style.borderColor = "magenta";

    }
})


document.addEventListener('keyup', (e) => {
    let keyCode = e.code;

    if (keyCode == 'KeyA') {
        animateKey[0].style.borderColor = "black";
        
    } else if (keyCode == 'KeyS') {
        animateKey[1].style.borderColor = "black";

    } else if (keyCode == 'KeyD') {
        animateKey[2].style.borderColor = "black";

    } else if (keyCode == 'KeyF') {
        animateKey[3].style.borderColor = "black";

    } else if (keyCode == 'KeyG') {
        animateKey[4].style.borderColor = "black";

    } else if (keyCode == 'KeyH') {
        animateKey[5].style.borderColor = "black";

    } else if (keyCode == 'KeyJ') {
        animateKey[6].style.borderColor = "black";

    } else if (keyCode == 'KeyK') {
        animateKey[7].style.borderColor = "black";

    } else if (keyCode == 'KeyL') {
        animateKey[8].style.borderColor = "black";
    } 
    
})




// Get drum machine elements
const pad1 = document.getElementById('pad-1');
const pad2 = document.getElementById('pad-2');
const pad3 = document.getElementById('pad-3');
const pad4 = document.getElementById('pad-4');
const pad5 = document.getElementById('pad-5');
const pad6 = document.getElementById('pad-6');
const pad7 = document.getElementById('pad-7');
const pad8 = document.getElementById('pad-8');
const pad9 = document.getElementById('pad-9');
const pad10 = document.getElementById('pad-10');
const pad11 = document.getElementById('pad-11');
const pad12 = document.getElementById('pad-12');
const pad13 = document.getElementById('pad-13');
const pad14 = document.getElementById('pad-14');
const pad15 = document.getElementById('pad-15');
const pad16 = document.getElementById('pad-16');
const pad17 = document.getElementById('pad-17');
const pad18 = document.getElementById('pad-18');
const pad19 = document.getElementById('pad-19');
const pad20 = document.getElementById('pad-20');


// get drum machine audio elements
const bassLoop = document.querySelector('#bass-loop');
const analogueDrums = document.querySelector('#analogue-drums');
const percDrums = document.querySelector('#perc-drums');
const snareDrums = document.querySelector('#snare-drums');

// Drum machine get elements
const pads = document.getElementsByClassName('pads');

// Drum machine event listener
pad1.addEventListener('click', () => {
    console.log(pad1);
    bassLoop.currentTime = 0;
    bassLoop.play();

})

pad2.addEventListener('click', () => {
    console.log(pad2);
    analogueDrums.currentTime = 0;
    analogueDrums.play();

})

pad3.addEventListener('click', () => {
    console.log(pad3);
    percDrums.currentTime = 0;
    percDrums.play();

})


pad4.addEventListener('click', () => {
    console.log(pad4);
    snareDrums.currentTime = 0;
    snareDrums.play();

})




// pads.addEventListener('click', () => {
//     console.log(pads[0]);
// })

