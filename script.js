// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numMistakes =0;

function getRandomInt() {
  const min = 1;
  const max = 7;
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomisePattern() {
    var i = 0;
    while (i <= 10) {
      pattern[i] = getRandomInt();
      i++;
    }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  numMistakes = 0;
  randomisePattern();
  console.log(pattern);
  // swap the Start and Stop buttons
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
  document.getElementById('mistakes').innerHTML = "Strikes: " + 0;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 515.0,
  6: 550.6
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  clueHoldTime -= 60;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  } else if (pattern[guessCounter] != btn) {
    numMistakes++;
    document.getElementById('mistakes').innerHTML = "Strikes: " + numMistakes;
    if (numMistakes == 3) {
      loseGame();
    }
  } else if (guessCounter != progress) {
    guessCounter++;
  } else if (guessCounter != pattern.length - 1) {
    progress++;
    playClueSequence();
  } else {
    winGame();
  }
}

// Timer Functionality

var second = 10;
var millisecond = 0;
var myTimer;

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }

  document.getElementById('second').innerText = formatTime(second);
  document.getElementById('millisecond').innerText = formatTime(millisecond);
}

function formatTime(x) {
  return x > 10 ? x : `0${x}`
}

function startTimer() {
  resetTimer
  myTimer = setInterval(() => { timer(); }, 10);
}

function resetTimer() {
  clearInterval(myTimer);
  second = 10;
  millisecond = 0;
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

