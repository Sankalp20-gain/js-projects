document.addEventListener("DOMContentLoaded" , () =>{
  const todoinput = document.getElementById("todoinput");
  const addbtn = document.getElementById("addbtn");
  const tasklist = document.getElementById("tasklist");

 addbtn.addEventListener("click" , () => {

   const todotext = todoinput.value.trim();
   if(todotext == ""){
    return;
   }
   const li = document.createElement("li");

   li.innerHTML = `<span class="task">${todotext}</span>
   <button class="delbtn">Completed</button>`

   li.querySelector(".delbtn").addEventListener("click" , ()=>{
    li.remove();
   })

   tasklist.appendChild(li);
   todoinput.value = "";
  })

 }) 