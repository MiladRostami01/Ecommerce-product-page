const cart = document.querySelector('.mr-cart')
const cartBox = document.querySelector('.mr-cart-box')

const sidebarIcon = document.querySelector('.mr-moblie-icon')
const sidebarMenu = document.querySelector('.mr-sidebar-menu')
const sidebarClose = document.querySelector('.mr-sidebar-close')
const overlay = document.querySelector('.mr-overlay')

const plusBtn = document.querySelector('.plus-btn')
const minesBtn = document.querySelector('.mines-btn')
const  countLabel = document.querySelector('.count-lable')

let count = parseInt(countLabel.innerHTML)


const info ={
  cartShow: false,
}

// Functions
const removeClasses = (el, clsName) =>  el.classList.remove(`${clsName}`)
const addClasses = (el, clsName) =>  el.classList.add(`${clsName}`)

cart.addEventListener('click', ()=> {
  if(!info.cartShow){
    removeClasses(cartBox, 'mr-hide-cartbox')
    info.cartShow = true
  }else{
    addClasses(cartBox,'mr-hide-cartbox')
    info.cartShow = false
  }
})

sidebarIcon.addEventListener('click', ()=> {
  removeClasses(sidebarMenu, 'mr-hide-sidebar')
  removeClasses(overlay, 'mr-hide-overlay')
})

sidebarClose.addEventListener('click', ()=> {
  addClasses(sidebarMenu, 'mr-hide-sidebar')
  addClasses(overlay, 'mr-hide-overlay')
})

overlay.addEventListener('click', ()=>{
  addClasses(sidebarMenu, 'mr-hide-sidebar')
  addClasses(overlay, 'mr-hide-overlay')
})

plusBtn.addEventListener('click', () => {
  count =  count + 1
  countLabel.innerText = count
})

minesBtn.addEventListener('click', () => {
  if(count > 1) count =  count - 1
  countLabel.innerText = count
})