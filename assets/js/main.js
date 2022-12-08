const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  const loadComponent = () =>{
      const loader = document.getElementById("loader")
  
      setTimeout( () => {
          loader.classList.add("hide-loader")
      }, 4000)
  }

const btnTheme = document.getElementById("theme-btn")
const body = document.body
const cartBtnOpen = document.getElementById("cart-btn")
const cartBtnClose = document.getElementById("close-cart")
const cartContainer = document.getElementById("cart-container")

document.addEventListener("DOMContentLoaded", () => {
    loadComponent()
})

const darkThemeChange = () => {
    
    body.classList.toggle("dark")

    if(btnTheme.classList.contains("bx-sun")){
        btnTheme.classList.replace("bx-sun", "bx-moon")
    }else{
        btnTheme.classList.replace("bx-moon", "bx-sun")
    }
}

btnTheme.addEventListener("click", e => darkThemeChange())

cartBtnOpen.addEventListener("click", e => cartContainer.classList.remove("hide"))

cartBtnClose.addEventListener("click", e => cartContainer.classList.add("hide"))

