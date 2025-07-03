// document.addEventListener("DOMContentLoaded" , ()=>{
//     const todoinput = document.getElementById("todoinput");
//     const addbtn = document.getElementById("addbtn");
//     const tasklist = document.getElementById("tasklist");

//     todoinput.addEventListener("keydown" , function(event){
//         if(event.key == "enter"){
//              const tasktext = todoinput.value.trim();

//         const li = document.createElement("li");
//         li.innerHTML = `<span class="task">${tasktext}</span>
//         <button class="delbtn">completed</button>`

//         const delbtn = li.querySelector(".delbtn");
//         delbtn.addEventListener("click" , ()=>{
//             li.remove();
//         })

//         tasklist.appendChild(li);
//         todoinput.value = "";
//         }
//     })

//     addbtn.addEventListener("click" , ()=>{
//     const tasktext = todoinput.value.trim();

//         const li = document.createElement("li");
//         li.innerHTML = `<span class="task">${tasktext}</span>
//         <button class="delbtn">completed</button>`

//         const delbtn = li.querySelector(".delbtn");
//         delbtn.addEventListener("click" , ()=>{
//             li.remove();
//         })

//         tasklist.appendChild(li);
//         todoinput.value = "";
//     })
// })