let input = document.querySelector('#search')
const clear = document.querySelector('.clear')
const apps = document.querySelector('.apps-google')
const buttonApps = document.querySelector('.button-apps')

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

  clearInput()
  return inputValue
}

function clearInput() {
  clear.addEventListener('click', () => {
    input.value = ''
    clear.classList.remove('box-actived')
    return
  })
}
