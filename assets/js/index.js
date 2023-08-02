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
let inputMailAdmin = document.getElementById('input-mail')
let inputMdpAdmin = document.getElementById('input-mdp')
// console.log(inputMdpAdmin)
let ok
let no
let btnAdmin = document.getElementById('btn-admin')
admin.forEach(element => {
    btnAdmin.addEventListener('click',function(){
        inputVide(inputMailAdmin)
        inputVide(inputMdpAdmin)
    setTimeout(function(){
        
        if(inputMailAdmin.value==element.email && inputMdpAdmin.value==element.mdp){
            
            alert('Bievenue'+' '+inputMailAdmin.value)
     }
    else if(inputMailAdmin.value!==element.email || inputMdpAdmin.value!==element.mdp){
            alert('Email ou mot de passe incorrect')
        }
    },500)
    
});
}) 

let inputMailCustomer = document.getElementById('input-mail-customer')
let inputMdpCustomer = document.getElementById('input-mdp-customer')
let btnCustomer=document.getElementById('btn-customer')
customer.forEach(element1 => {
    btnCustomer.addEventListener('click',function(){
        inputVide(inputMailCustomer)
        inputVide(inputMdpCustomer)
    setTimeout(function(){
        
        if(inputMailCustomer.value==element1.email && inputMdpCustomer.value==element1.mdp){
            
            alert('Bievenue'+' '+inputMailCustomer.value)
     }
    else if(inputMailCustomer.value!==element1.email || inputMdpCustomer.value!==element1.mdp){
            alert('Email ou mot de passe incorrect')
        }
    },500)
    
});
})   

