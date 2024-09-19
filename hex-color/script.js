const main = document.getElementById('main')
const colorText = document.querySelector('.color')

let clickMe = () => {
    let color = '#'
    let array = '0123456789ABCDEF'

    for (let i = 0; i < 6; i++) color += array[Math.floor(Math.random() * 16)]
    main.style.backgroundColor = color
    colorText.textContent = color
}
