document.addEventListener("DOMContentLoaded",()=>{
    const display = document.getElementById("calcidisplay");
    const orpbtn = document.querySelectorAll(".orpbtn") 
    const numbtn = document.querySelectorAll(".num");
    const enter = document.getElementById("enter");
    const delButton = document.getElementById("del");
    const acButton = document.getElementById("ac");
    
    let currentinput = "";
    let operator = "";
    let firstnum = "";

    numbtn.forEach(button =>{
        button.addEventListener("click" , ()=>{
            currentinput+=button.textContent;
            display.textContent=currentinput;

          
        })

    })
    orpbtn.forEach(button =>{
        button.addEventListener("click" , ()=>{
            operator=button.textContent;
            display.textContent = operator;
            firstnum = currentinput;
            currentinput="";

             delButton.addEventListener("click" , ()=>{})
        })
    })

    enter.addEventListener("click" , ()=>{
        let secondnum = currentinput;
        currentinput = "";
        let result;

        let num1 = parseFloat(firstnum);
        let num2 = parseFloat(secondnum);

        if(operator === "+"){
           result = num1 + num2;
        }
        else if(operator === "-"){
            result = num1 - num2;
        }
        else if(operator === "x"){
            result = num1*num2;
        }
        else if(operator === "/"){
            result = num1/num2;
        }
        else{
            result = "invalid"
        }

        display.textContent = result;
        currentinput = result.toString();
        firstnum = "";
        operator = "";
    })

     delButton.addEventListener("click" , ()=>{
                currentinput=currentinput.slice(0,-1);
                display.textContent = currentinput;
            })
    acButton.addEventListener("click" , ()=>{
        currentinput = "";
        display.textContent = currentinput;
         
    })
    
})