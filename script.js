const img = document.querySelector(".macbook")
const mac_color = document.querySelector(".mac_color")
const mac_price = document.querySelector("b")
const additional_prices = document.querySelectorAll("[data-add]")
const colorBtns = document.querySelectorAll(".color_item")
const whiteBtn = document.querySelector(".white")
const greyBtn = document.querySelector(".space_grey")
const storage = document.querySelectorAll(".storage_price")
const menu_model = document.querySelector(".menu_model")
const menu = document.querySelector(".menu")
const menu_bg = document.querySelector(".menu_bg")
let orgPrice = +mac_price.innerHTML

menu_model.onclick = () => {
  menu.style.display = 'block'
  menu_bg.style.display = 'block'
}

menu_bg.onclick = () => {
  menu.style.display = 'none'
  menu_bg.style.display = 'none'
}

colorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active')
    btn.classList.add('active')
  })
})

greyBtn.onclick = () => {
  mac_color.innerHTML = 'Space Grey'
  img.src = `./img/mbp14-silver-select-202110 1.png`
}

whiteBtn.onclick = () => {
  mac_color.innerHTML = 'White'
  img.src = `./img/mbp14-spacegray-select-202110 1.png`
}

storage.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.act')?.classList.remove('act')
    btn.classList.add('act')
  })
})

additional_prices.forEach(btn => {
  btn.onclick = () => {
    let addPrice = +btn.getAttribute('data-add')
    if(addPrice) {
      mac_price.innerHTML = orgPrice + addPrice
    } else {
      mac_price.innerHTML = orgPrice
    }
  }
})
