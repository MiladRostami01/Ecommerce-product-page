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
      <p>Fall Limited Edition Sneakers...</p>
      <p>$125.00 × ${cartCount.innerHTML} <span>$${cartCount.innerHTML * 125}.00</span></p>
    </div>
    <a class="mr-product-delete"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg></a>
  </div>
  <button class="btn mr-checkout-btn">Checkout</button>
  `

  const deleteIcon = document.querySelector('.mr-product-delete')

  deleteIcon.addEventListener('click', ()=> {
    cartCount.innerHTML= 0
    cartResult.innerHTML= `
      <p class="mr-cart-content-empety">Your cart is empty.</p>
    `

  })
})

