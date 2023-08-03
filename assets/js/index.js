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
btnAdmin.addEventListener('click',function(){
    inputVide(inputMailAdmin)
    inputVide(inputMdpAdmin)
    setTimeout(function(){
        let i=0
        let isAdminFound = false
        while(i < admin.length){
            if(inputMailAdmin.value==admin[i].email){
               if (inputMdpAdmin.value==admin[i].mdp){
                alert('Bievenue'+' '+inputMailAdmin.value) 
                isAdminFound = true
                break
            }
                
         }
         i++
        }
     if(!isAdminFound){
                       alert('Email ou mot de passe incorrect')
        }
    },500)
})
let inputMailCustomer = document.getElementById('input-mail-customer')
let inputMdpCustomer = document.getElementById('input-mdp-customer')
let btnCustomer=document.getElementById('btn-customer')
btnCustomer.addEventListener('click',function(){

    inputVide(inputMailCustomer)
    inputVide(inputMdpCustomer)
    setTimeout(function(){
        let i=0
        let isCustomerFound = false
        while(i < customer.length){
            if(inputMailCustomer.value==customer[i].email){
               if (inputMdpCustomer.value==customer[i].mdp){
                alert('Bievenue'+' '+inputMailCustomer.value) 
                isCustomerFound = true
                break
            }
                
         }
         i++
        }
     if(!isCustomerFound){
                       alert('Email ou mot de passe incorrect')
                    }
                },500)
            })
    //     while(i < admin.length){
//     if(inputMailAdmin.value==admin[i].email && inputMdpAdmin.value==admin[i].mdp){
            
//         alert('Bievenue'+' '+inputMailAdmin.value)
//         break
//  }
//  else if(inputMailAdmin.value!==admin[i].email || inputMdpAdmin.value!==admin[i].mdp){
//                 alert('Email ou mot de passe incorrect')
//                 break
// }
// i++
// }
// })

    
// });
// }) 



