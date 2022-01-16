const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('DOMContentLoaded', appHeight)
window.addEventListener('resize', appHeight)

const mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
mobileDevice && window.addEventListener('scroll', appHeight)