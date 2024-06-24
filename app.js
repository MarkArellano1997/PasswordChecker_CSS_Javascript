let input = document.querySelector("input")
let view = document.querySelector('button')
let alert = document.querySelector('#alert')

input.addEventListener('input', ()=>{

    if (input.value.length<6) {
        alert.innerHTML = 'Weak'
    }else if(input.value.length<10){
        alert.innerHTML = 'Medium'
    }else{
        alert.innerHTML = 'Strong'
    }
})

view.addEventListener('click', ()=>{

    const inputType = input.getAttribute('type')

    if (inputType==="password") {
        inputType = input.setAttribute('type','text')
    }else{
        inputType===input.setAttribute('type','password')
    }
    console.log(inputType);
})
