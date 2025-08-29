const validpin = 1234 

const  transactionData = []

// function to get input value
function getInputValue (id){
   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt(inputFieldValue)
   return inputFieldValueNumber

}


function getInputFieldValue(id){

   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   return inputFieldValue

}


// function to get innertext

function getInnerText(id){
   const element = document.getElementById(id)
   const elementValue = element.innerText
   const elementValueNumber = parseInt(elementValue)
   return elementValueNumber
}


// function to set innertext
function setInnerText(value){

   const availableBalanceElement = document.getElementById('available-balance')
   availableBalanceElement.innerText = value

}

// function to toggle 
function handleToggle(id){

   const forms = document.getElementsByClassName('form')

for(const form of forms){
   form.style.display = 'none'
}

document.getElementById(id).style.display = 'block'


}






// add money btn
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    

    const bank = getInputFieldValue('bank')

    const account = document.getElementById('account-number').value 

    const add = getInputValue('add-amount')

    const pinNumber = getInputValue('add-pin')

   const availableBalance = getInnerText('available-balance')

//    console.log(availableBalance)

   if(account.length <11){
    alert('provide valide number')
    return
   }

   if(pinNumber !== validpin ){
    alert('please provide valid pin')
    return
   }

   const totalBalance = add + availableBalance 
   setInnerText(totalBalance)

   const data = {
      name:'Add Money',
     date:new Date().toLocaleTimeString()

   }
   transactionData.push(data)

})




// cash out money btn

document.getElementById('withdraw-btn').addEventListener('click',function(e){
   e.preventDefault()

   const amount = getInputValue('withdraw-amount')
   const agent = getInputFieldValue('agent-num')

   const pin = getInputValue('w-pin')

   const availableBalance = getInnerText('available-balance')

   if(agent.length <11){
      alert('please provide valid number')
      
      return
   }

   if(pin !== validpin){
      alert('invalid pin ')
      return
   }

   const totalBalance = availableBalance - amount 
     setInnerText(totalBalance)

     const data = {
      name:'Cash out',
     date:new Date().toLocaleTimeString()

   }
   transactionData.push(data)
   console.log(transactionData)
  
})

document.getElementById('trans-btn').addEventListener('click',function(){
   const transcationContainer = document.getElementById('Transaction-container')

   transcationContainer.innerText = ''

   for(const data of transactionData){
      const div = document.createElement('div')
      div.innerHTML = `
      <div class="bg-white mt-3 rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center">
                    <div class=" p-3 rounded-full bg-[#F4F5F7]">
                     <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                 <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                </div>
                 <i class="fa-solid fa-ellipsis-vertical"></i> 
               </div>
      `

      transcationContainer.appendChild(div)
      
      
   }
})


// toggling

document.getElementById('add-btn').addEventListener('click',function(){

   handleToggle('add-money-parent')
  
})

document.getElementById('cash-btn').addEventListener('click',function(){
   
   handleToggle('cash-out-parent')

})

document.getElementById('transfer-btn').addEventListener('click',function(){

   handleToggle('transfer-money-parent') 
})


document.getElementById('bonus-btn').addEventListener('click',function(){

    handleToggle('get-bonus-parent') 
})

document.getElementById('pay-btn').addEventListener('click',function(){
   handleToggle('pay-parent')
})
document.getElementById('trans-btn').addEventListener('click',function(){
   handleToggle('transaction-parent')
})