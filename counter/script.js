const increment = document.getElementById('increment')
const dicrement = document.getElementById('dicrement')
const value = document.getElementById('value')
const reset = document.getElementById('reset')
let count = 0

function Increment() {
    count++
    value.textContent = count
}
function Dicrement() {
    if (count < 1) {
        value.textContent = 0
    } else {
        count--
        value.textContent = count
    }
}

function ResetBtn() {
    value.textContent = 0
}
