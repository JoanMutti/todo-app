new Sortable($tasks, {
    animation: 250,
    onEnd: function({oldIndex, newIndex}){
        console.log(oldIndex, newIndex)
        const aux = tasks[oldIndex]
        tasks.splice(oldIndex, 1)
        tasks.splice(newIndex, 0, aux) 
        showTasks(tasks)
    }
})

