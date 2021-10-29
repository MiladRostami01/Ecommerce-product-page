const cart = document.querySelector('.mr-cart')
const cartBox = document.querySelector('.mr-cart-box')

const sidebarIcon = document.querySelector('.mr-moblie-icon')
const sidebarMenu = document.querySelector('.mr-sidebar-menu')
const sidebarClose = document.querySelector('.mr-sidebar-close')
const overlay = document.querySelector('.mr-overlay')

const plusBtn = document.querySelector('.plus-btn')
const minesBtn = document.querySelector('.mines-btn')
const labelCount = document.querySelector('.count-lable')

const addToCartBtn =document.querySelector('.add-to-cart')
const cartCount = document.querySelector('.mr-cart-count')

const cartResult = document.querySelector('.mr-cart-content')




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
  let plus = parseInt(labelCount.innerHTML)
  plus =  plus + 1
  labelCount.innerText = plus
})

minesBtn.addEventListener('click', () => {
  let mines = parseInt(labelCount.innerHTML)
  if(mines > 1) mines =  mines - 1
  labelCount.innerText = mines
})

addToCartBtn.addEventListener('click', () => {
  cartCount.innerHTML = parseInt(cartCount.innerHTML) + parseInt(labelCount.innerHTML)

  labelCount.innerText = 1

  //calc 

  cartResult.innerHTML= `
  <div class="mr-cart-result">
    <div class="mr-product-img"><img src="images/image-product-1-thumbnail.jpg" alt=""></div>
    <div class="mr-product-description">
      <p>کفش ورزشی پاییز...</p>
      <p>250.000 × ${cartCount.innerHTML} = <span>${cartCount.innerHTML * 250}.000 تومان</span></p>
    </div>
    <a class="mr-product-delete"><span class="icon-delete"></span></a>
  </div>
  <button class="btn mr-checkout-btn">پرداخت</button>
  `

  const deleteIcon = document.querySelector('.mr-product-delete')

  deleteIcon.addEventListener('click', ()=> {
    cartCount.innerHTML= 0
    cartResult.innerHTML= `
      <p class="mr-cart-content-empety">سبد خرید خالی است.</p>
    `

  })
})


