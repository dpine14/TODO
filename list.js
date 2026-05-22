let list =[], complete =[], incomplete =[];
const task = document.getElementById("myInput");

function addToList(task) {
    const newItem = document.createElement('li');
    const containter = document.getElementById('todo-list')
    
    newItem.innerText = task;
    newItem.className = 'todo-item';
    containter.appendChild(newItem);

}
task.addEventListener('keyup', function search(event){
    if (event.key === 'Enter' && task.value != '') {
        list.push(task.value);
        addToList(task.value);
        task.value = "";
        //document.getElementById("display-area").innerHTML = task.value;
        
    }
})