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

function afficheMessage(container){
    let message = document.createElement('div')
    message.classList.add('message')
    container.appendChild(message)
}
function test (email,mdp,list){
    let i = 0
    isAdminFound=false
    while(i < list.length){
        if(email.value==list[i].email){
           if (mdp.value==list[i].mdp){
            alert('Bievenue'+' '+email.value) 
            isAdminFound = true
            break
        }
            
     }
     i++
    }
 if(!isAdminFound){
                   alert('Email ou mot de passe incorrect')
    }
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
let inputMailAdmin = document.getElementById('input-mail')
let inputMdpAdmin = document.getElementById('input-mdp')

let btnAdmin = document.getElementById('btn-admin')
btnAdmin.addEventListener('click',function(){
    inputVide(inputMailAdmin)
    inputVide(inputMdpAdmin)
    setTimeout(function(){
        test(inputMailAdmin,inputMdpAdmin,admin)
    },500)
})
let inputMailCustomer = document.getElementById('input-mail-customer')
let inputMdpCustomer = document.getElementById('input-mdp-customer')
let btnCustomer=document.getElementById('btn-customer')
btnCustomer.addEventListener('click',function(){

    inputVide(inputMailCustomer)
    inputVide(inputMdpCustomer)
    setTimeout(function(){
        test(inputMailCustomer,inputMdpCustomer,customer)
                },500)
            })
