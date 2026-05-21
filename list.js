let list =[], complete =[], incomplete =[];

const task = document.getElementById("myInput");

task.addEventListener('keydown', function search(event){
    if (event.key === 'Enter') {
        list.push(task.value);
        console.log(list);
        task.value = "";
    }
})