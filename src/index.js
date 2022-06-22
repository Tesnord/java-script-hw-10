const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body')
const switchTheme = document.querySelector('#theme-switch-toggle')

if (localStorage.getItem('ui-theme') == Theme.LIGHT) {
  body.classList.add(Theme.LIGHT)
} else if (localStorage.getItem('ui-theme') == Theme.DARK) {
  body.classList.add(Theme.DARK)
}

if (body.classList.contains(Theme.DARK)) {
  switchTheme.setAttribute('checked', true)
}

switchTheme.addEventListener('change', event => {
  switch (true) {
    case body.classList.contains(Theme.DARK):
      body.classList.replace(Theme.DARK, Theme.LIGHT)
      localStorage.setItem('ui-theme', Theme.LIGHT)
        break
    case body.classList.contains(Theme.LIGHT):
      body.classList.replace(Theme.LIGHT, Theme.DARK)
      localStorage.setItem('ui-theme', Theme.DARK)
        break
    default:
      body.classList.add(Theme.DARK) 
      localStorage.setItem('ui-theme', Theme.DARK)
  }
})