const comp=document.querySelectorAll('button')[0]
const pending=document.querySelectorAll('button')[1]

function done(){
fetch("https://jsonplaceholder.typicode.com/todos")
.then(Response=>Response.json())
.then(json =>{
let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
json.forEach(todo => {
    if (todo.completed==true){
        li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
    }
});
document.getElementById("List1").innerHTML = li;
})
}

function pend(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(Response=>Response.json())
    .then(json =>{
    let li=`<tr><th>ITEM ID</th><th>TASK</th></tr>`
    json.forEach(todo => {
        if (todo.completed==false){
            li+=`<tr><td>${todo.id} </td><td>${todo.title} </td></tr>`
        }
    });
    document.getElementById("List2").innerHTML = li;
    })
}




comp.addEventListener("click",done)
pending.addEventListener("click",pend)