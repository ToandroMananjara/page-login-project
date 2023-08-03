const admin = [
    {
        email:"mahasalotra@gmail.com",
        mdp: "123456"
    },
    {
        email:"rakotomaditra@gmail.com",
        mdp:"rakoto123"
    }
];
const customer = [
    {
        email:"customer1@gmail.com",
        mdp: "123456"
    },
    {
        email:"customer2@gmail.com",
        mdp:"rakoto123"
    },
    {
        email:"customer3@gmail.com",
        mdp:"rakoto1234"
    }
];

function inputVide(input){
    if(input.value===""){
        input.style.border="solid 1px red"
        input.addEventListener('keyup',function(){
        input.style.border="solid 1px green"    
        })
    }else if(input.value!=""){
        input.style.border="solid 1px green"
    }
}
let message

let container1 = document.querySelector('.container-item1')
function createMessage(container){

    message = document.createElement('div')
    message.classList.add('message')
    container.appendChild(message)
}
function afficheMessage(text){
     message.innerHTML=text
}
let success = "bienvenue"
let  isAdminFound = false
function test (email,mdp,list){
    
    let mesTrue
    let mesFalse
    // isAdminFound=false    
   
    list.forEach(element =>{
        if(email.value==element.email){
           if (mdp.value==element.mdp){
                mesTrue = `Bienvenue ${email.value}`
               afficheMessage(mesTrue)

            isAdminFound = true
        }
            
     }
        
    });
    if(!isAdminFound){
        // alert('Email ou mot de passe incorrect')
        mesFalse = "Email ou mot de passe incorrect"
        afficheMessage(mesFalse)
    }
    
    }

let inputMailAdmin = document.getElementById('input-mail')
let inputMdpAdmin = document.getElementById('input-mdp')
let btnAdmin = document.getElementById('btn-admin')
btnAdmin.addEventListener('click',function(){
    if ((inputMailAdmin.value="") || (inputMailAdmin.value=="")){
        inputVide(inputMailAdmin)
        inputVide(inputMdpAdmin)    
    }
    else {
        createMessage(container1)
        setTimeout(function(){
            test(inputMailAdmin,inputMdpAdmin,admin)
    
        },50)
    }
    
    
  
})
let inputMailCustomer = document.getElementById('input-mail-customer')
let inputMdpCustomer = document.getElementById('input-mdp-customer')
let container2 = document.querySelector('.container-item2')
let btnCustomer=document.getElementById('btn-customer')
btnCustomer.addEventListener('click',function(){
    if ((inputMailCustomer.value="") || (inputMailCustomer.value=="")){
        inputVide(inputMailCustomer)
        inputVide(inputMdpCustomer)    
    }
    else{
        createMessage(container2)
        message.style.color="var(--bleu)"
     
        setTimeout(function(){
            test(inputMailCustomer,inputMdpCustomer,customer)
                    },50)
        
    }
})
