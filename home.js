// login button 
document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pin = 1234
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueconverted = parseInt( mobileNumberValue) 

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    

    if(mobileNumberValueconverted === mobileNumber && pinNumberValueConverted === pin){
        window.location.href="./home.html"
    }
    else{
        alert("invalid")
    }
})