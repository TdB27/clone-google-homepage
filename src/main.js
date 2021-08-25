let input = document.querySelector('#search')
const clear = document.querySelector('.clear')
let main = document.querySelector('main')
const apps = document.querySelector('.apps-google')
const buttonApps = document.querySelector('.button-apps')
const boxTools = document.querySelector('.tools')

function appearApps() {
  buttonApps.classList.toggle('button-actived')
  apps.classList.toggle('box-actived')
}

/* função para digitar e add o clear */
input.onkeyup = function () {
  inputValue = this.value

  clear.classList.add('box-actived')
  if (inputValue === '') {
    clear.classList.remove('box-actived')
  }
  appsRemoveWhenCall()
  clearInput()
  return inputValue
}

function clearInput() {
  clear.addEventListener('click', () => {
    input.value = ''
    clear.classList.remove('box-actived')
    appsRemoveWhenCall()
    return
  })
}

function appsRemoveByClick() {
  main.addEventListener('click', () => {
    appsRemoveWhenCall()
  })
}

function appsRemoveWhenCall() {
  buttonApps.classList.remove('button-actived')
  apps.classList.remove('box-actived')
}

buttonApps.addEventListener('click', () => {
  function appearApps() {
    buttonApps.classList.toggle('button-actived')
    apps.classList.toggle('box-actived')
    return appsRemoveByClick()
  }
  appearApps()
})

// mudar os cores dos links quando clicados
function changeColorLinks(value) {
  document.querySelectorAll('[data-color]').forEach(item => {
    const itemColor = item.getAttribute('data-color')

    if (itemColor === value) {
      item.classList.add('actived')
      appsRemoveWhenCall()
    } else {
      item.classList.remove('actived')
    }
  })
}

boxTools.addEventListener('click', () => {
  const buttonTools = document.querySelector('.tools button')
  const paragraphTools = document.querySelector('.p')
  const menuTools = document.querySelector('.menu-tools')

  buttonTools.classList.toggle('button-actived')
  paragraphTools.classList.toggle('no-actived')
  menuTools.classList.toggle('actived')
})

