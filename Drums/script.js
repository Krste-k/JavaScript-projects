const dinamicHtml = `<section class="main-wrapper">
<div class="drum-kit-wrapper">
  <div data-key="74" class="key snare">
    <kbd>J</kbd>
  </div>
  <div data-key="66" class="key kick">
    <kbd>B</kbd>
  </div>
  <div data-key="86" class="key kick2">
    <kbd>V</kbd>
  </div>
  <div data-key="72" class="key tom-high">
    <kbd>H</kbd>
  </div>
  <div data-key="71" class="key tom-mid">
    <kbd>G</kbd>
  </div>
  <div data-key="70" class="key tom-low">
    <kbd>F</kbd>
  </div>
  <div data-key="69" class="key crash">
    <kbd>E</kbd>
  </div>
  <div data-key="82" class="key ride">
    <kbd>R</kbd>
  </div>
  <div data-key="73" class="key hihat-open">
    <kbd>I</kbd>
  </div>
  <div data-key="75" class="key hihat-close">
    <kbd>K</kbd>
  </div>
  <img class="drum-kit" src="./img/81p-arHRxAL._AC_SL1500_.jpg" alt="Drum Kit" />
</div>
</section>

<audio data-key="74" src="sounds/snare.wav"></audio>
<audio data-key="66" src="sounds/kick.wav"></audio>
<audio data-key="86" src="sounds/kick.wav"></audio>
<audio data-key="72" src="sounds/tom-high.wav"></audio>
<audio data-key="71" src="sounds/tom-mid.wav"></audio>
<audio data-key="70" src="sounds/tom-low.wav"></audio>
<audio data-key="69" src="sounds/crash.wav"></audio>
<audio data-key="82" src="sounds/ride.wav"></audio>
<audio data-key="73" src="sounds/hihat-open.wav"></audio>
<audio data-key="75" src="sounds/hihat-close.wav"></audio>`

document.querySelector('body').insertAdjacentHTML('beforeend', dinamicHtml)


window.addEventListener("keydown", (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`)
    if (!keyElement) return;
   
    let audio = document.querySelector(`audio[data-key="${code}"]`)
    audio.currentTime = 0;
    audio.play()


    keyElement.classList.add('playng');

});


const removedKeyTransition = e => {
    if (e.propertyName !== 'transform')return;
    e.target.classList.remove('playing')
}

 let drumKey = document.querySelectorAll('.key');
 drumKey.forEach( key => {
key.addEventListener('transitionend',removedKeyTransition)
 })




