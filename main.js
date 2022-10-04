let menu = document.querySelector('.box-menu');

function toggleMenu(){
    menu.classList.toggle('open');


}//javascript code for the drop down menu

let bank = document.querySelector('.bank_transfer'); //javascript code that displays the hidden bank information
function openBank(){
    bank.classList.toggle('open_bank_transfer')  
}




let cc = document.querySelector('.CC_transfer'); //javascript code that displays the hidden  credit card 

function openCC(){
    cc.classList.toggle('open_CC_transfer')  
}

//Begining of credit card validation code
function validationn(){
    let name1 = document.querySelector('#f_Name').value;
    let name2 = document.querySelector('#L_Name').value;
    let cc_number = document.querySelector('#card_number').value;
    let cvv = document.querySelector('#cvv').value;
    let MM = document.querySelector('#month').value;
    let  YY = document.querySelector('#Year').value;
    
    let msg = document.querySelector("#error_message");
    let msg2 = document.querySelector("#error_message_2");
    let msg3 = document.querySelector("#error_message_3")
    let numbers = /^[0-9]+$/;
    let letters = /^[A-Za-z]+$/;
    
    if(!name1.match(letters) ||!name2.match(letters)){
        msg.textContent="invalid first name or last name(use only alphabets)";
        
    }else if(!cc_number.match(numbers) ||  !cvv.match(numbers)){
        msg2.textContent="invalid card number or cvv";
        
    }
    
    else if(MM>31 || YY<2022||!MM.match(numbers)||!YY.match(numbers)){
        msg3.textContent="invalid expiration date";
       
    }
    else{
        window.location = "credit_payment.html";
    
    }
}

//End of credit card validation code