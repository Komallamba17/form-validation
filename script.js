const name =document.getElementById('name')
const password =document.getElementById('password')
const font=document.getElementById('form')
const errorElement=document.getElementById('error')
form.addEventListener('submit',(e)=>{
    let messages=[]
    if(name.value==='' || name.value==null){
        messages.push('Name is required')
    }
    if(password.value.length<=6){
        messages.push('password must be longer than 6 characters')
    }
    if(password.value.length>=20){
        messages.push('password must be longer than 20 characters')
    }
    if(password.value==='password'){
        messages.push('Password cannot be password')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')

    }
        
}) 