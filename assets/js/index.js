
function mdpToggle(btn,inputMdp){
    btn.addEventListener('click',function(){
        if(btn.innerHTML=='<i class="fa-regular fa-eye"></i>' ){
            btn.innerHTML='<i class="fa-regular fa-eye-slash"></i>'
            inputMdp.type = "text"
        }
        else if(btn.innerHTML=='<i class="fa-regular fa-eye-slash"></i>' ){
            
            btn.innerHTML='<i class="fa-regular fa-eye"></i>'
            inputMdp.type = "password"
        }
        inputMdp.focus()
    })
    
}
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
let messageAdmin = document.querySelector('.message-admin')
let messageCustomer = document.querySelector('.message-customer')
let container1 = document.querySelector('.container-item1')
// function createMessage(container){

//     message = document.createElement('div')
//     message.classList.add('message')

//     container.appendChild(message)
// }
// function afficheMessage(text){
//      message.innerHTML+=text +'<button id="btn-ok">Ok</button>'
// }
let text = document.querySelectorAll('.text')
let  isAdminFound = false
function test (email,mdp,list){
    
    let mesTrue
    let mesFalse
    // isAdminFound=false    
   
    list.forEach(element =>{
        text.forEach(t=>{
            if(email.value==element.email){
                if(mdp.value==element.mdp){            
                    isAdminFound = true
                    t.innerHTML = `Bienvenue ${element.userName} !` 
                }
            } 
            
    
            
            if(!isAdminFound){
                // alert('Email ou mot de passe incorrect') 
                t.innerHTML = "Email ou mot de passe incorrect !"
            // afficheMessage(mesFalse)
            }

         });
    })
    
}

let btnOkAdmin = document.querySelector('.btn-ok-Admin')
let btnOkCustomer = document.querySelector('.btn-ok-customer')
function clickOk(btn,message){
    btn.addEventListener('click',function(){
        message.style.display="none" 
    })
}




let inputMailAdmin = document.getElementById('input-mail')
let inputMdpAdmin = document.getElementById('input-mdp')
let mdpBtnAdmin = document.querySelector('.btn-mdp-admin')
let btnAdmin = document.getElementById('btn-admin')
mdpToggle(mdpBtnAdmin,inputMdpAdmin)
btnAdmin.addEventListener('click',function(){
    fetch("./assets/user-admin.json")
    .then(res => res.json())
    .then(admin => {
        if ((inputMailAdmin.value=="") || (inputMailAdmin.value=="")){
            inputVide(inputMailAdmin)
            inputVide(inputMdpAdmin)    
        }
        else {
            messageAdmin.style.display="flex"
            // createMessage(container1)
            setTimeout(function(){
                
                test(inputMailAdmin,inputMdpAdmin,admin)
                clickOk(btnOkAdmin,messageAdmin)
            },50)
        } 
    })
})

let inputMailCustomer = document.getElementById('input-mail-customer')
let inputMdpCustomer = document.getElementById('input-mdp-customer')
let mdpBtnCustomer= document.querySelector('.btn-mdp-customer')
let container2 = document.querySelector('.container-item2')
let btnCustomer=document.getElementById('btn-customer')
mdpToggle(mdpBtnCustomer,inputMdpCustomer)
btnCustomer.addEventListener('click',function(){
    fetch("./assets/user-customer.json")
    .then(resCust=>resCust.json() )
    .then(customer =>{
        if ((inputMailCustomer.value=="") || (inputMailCustomer.value=="")){
            inputVide(inputMailCustomer)
            inputVide(inputMdpCustomer)    
        }
        else{
            messageCustomer.style.display="flex"
            // createMessage(container2)
            messageCustomer.style.color="var(--bleu)"
         
            setTimeout(function(){
                test(inputMailCustomer,inputMdpCustomer,customer)
                clickOk(btnOkCustomer,messageCustomer)
            },50)
            
        }
    } )
    
})
