
let local = document.getElementById('local')
let msg = document.getElementById('msg')

let inputLocation = document.getElementById('typeLocation')


inputLocation.addEventListener('keypress',(e)=>{
    let inputValue = e.target.value

    localStorage.setItem("Location", inputValue)
    msg.innerText = inputValue
})

const inputValue = localStorage.getItem('Location')

msg.innerText = inputValue

let locations = localStorage.setItem("Location", "Bangladesh")
let getData = localStorage.getItem('Location');

local.innerText = getData



