const imgs = document.getElementById('imgs') // image-container
const img = document.querySelectorAll('#imgs img') //All Images

const nextBtn = document.getElementById('right')
const prevBtn = document.getElementById('left')

let idx = 1

let interval = setInterval(run, 2000)

function run(){
  moveToNextImage()
}

// const size = img[0].clientWidth
// imgs.style.transform = 'translateX(' + (-size * idx) + 'px)'

imgs.style.transform = `translateX(${-idx * 500}px)`

imgs.addEventListener('transitionend', () => {
  if(img[idx].id === 'lastClone'){
    imgs.style.transition = 'none'
    idx = img.length -2
    imgs.style.transform = `translateX(${-idx * 500}px)`
  }
  else if(img[idx].id === 'firstClone'){
    imgs.style.transition = 'none'
    idx = img.length - idx
    imgs.style.transform = `translateX(${-idx * 500}px)`
  }
})

const moveToNextImage = () => {
  if(idx >= img.length -1 ) return
  imgs.style.transition = 'transform 0.5s ease-in-out'
  idx++
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

const moveToPreviousImage= () => {
  if(idx <= 0 ) return
  imgs.style.transition = 'transform 0.5s ease-in-out'
  idx--
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

nextBtn.addEventListener('click', () => {

  moveToNextImage()
  resetInterval()
})

prevBtn.addEventListener('click', () => {
  
  moveToPreviousImage()
  resetInterval()
})





