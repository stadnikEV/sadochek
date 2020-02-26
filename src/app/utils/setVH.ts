import debounce from 'debounce'

const setVH = () => {
  const set = debounce(() => {
    const vh: number = document.documentElement.clientHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, 50)

  window.addEventListener('resize', set)

  set()
}

export default setVH
