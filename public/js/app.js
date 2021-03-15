console.log('This Is From External javascript File')



const formData=document.querySelector('form')
const inputData = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
formData.addEventListener('submit',(e)=>{
   e.preventDefault();
   const address = inputData.value
   //console.log(location)
   messageOne.innerText = "Loading..."
   messageTwo.innerText = ''
   fetch('http://localhost:3000/weather?address='+ address).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.innerText = data.error
        }else{
            messageOne.innerText=data.location
            messageTwo.innerText = data.foreCast
        }
    })
})
    
})