const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 15000
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
  text.innerHTML = 'Deep Breathe'
  container.className = 'container grow'
  
  setTimeout(() => {
    text.innerText = 'Hold'
    
    setTimeout(() => {
      text.innerText = 'Slow Exhale'
      container.className = 'container shrink'
    }, holdTime)
  }, breatheTime)
}

setInterval(breatheAnimation, totalTime)

