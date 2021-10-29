// Slider
const mainSlides = [...document.querySelectorAll('.mr-mainSlide')]
const mainDotContainer = [...document.querySelectorAll('.mr-main-dot-container')]
const mainDots = [...document.querySelectorAll('.mr-main-dot')]

const mainPrev = document.querySelector('.mr-main-prev')
const mainNext = document.querySelector('.mr-main-next')

let mainIndex = 1

// change active situation 
const atctiveHandler = (id , arr) => {
  arr.map (container => {
    container.classList.remove('mr-active')
  })
  arr[id-1].classList.add('mr-active')
}

// main slider
const mainShow = (num) => {
  mainSlides.map(slide =>{
    slide.style.display = 'none'
  })
  mainIndex = num
  if(num > mainSlides.length) mainIndex = 1
  if(num < 1) mainIndex = mainSlides.length
  atctiveHandler(mainIndex, mainDotContainer )
  mainSlides[mainIndex-1].style.display = 'block'
}
mainShow(mainIndex)
const mainPlus = (num)=> mainShow( mainIndex = parseInt(mainIndex)+ num)

mainPrev.addEventListener('click',()=> mainPlus(-1))
mainNext.addEventListener('click',()=> mainPlus(1))

mainDots.map(dot => {
  dot.addEventListener('click', ()=>{
    mainShow(dot.dataset.mainDotId)
  })
})

// MODAL
const modal = document.querySelector('.mr-modal')
const closeModal = document.querySelector('.mr-modal-close')
const modalSlides = [...document.querySelectorAll('.mr-modalSlide')]
const modalDotContainer = [...document.querySelectorAll('.mr-modal-dot-container')]
const modalDots =[...document.querySelectorAll('.mr-modal-dot')]

const modalPrev = document.querySelector('.mr-modal-prev')
const modalNext = document.querySelector('.mr-modal-next')

let modalIndex = 1 


const openModal = () => modal.style.display="flex"
closeModal.addEventListener('click', ()=> {
  modal.style.display="none"
})

// modal slider
const modalShow = (num) =>{
  modalSlides.map(slide => {
    slide.style.display= "none"
  })
  modalIndex = num
  if(num > modalSlides.length) modalIndex = 1
  if(num < 1) modalIndex = modalSlides.length
  atctiveHandler(modalIndex, modalDotContainer)
  modalSlides[modalIndex-1].style.display= 'block'
}
modalShow(modalIndex)

const modalPlus = (num)=> modalShow(modalIndex = parseInt(modalIndex) + num)

modalPrev.addEventListener('click',()=> modalPlus(-1))
modalNext.addEventListener('click',()=> modalPlus(1))

mainSlides.map(slide => {
  slide.addEventListener('click', ()=> {
    if(window.innerWidth < 992) return
    openModal()
    modalShow(slide.dataset.mainId)
  })
})

modalDots.map(dot => {
  dot.addEventListener('click', () => {
    modalShow(dot.dataset.modalDotId)
  })
})