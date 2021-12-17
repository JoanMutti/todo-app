const $filters = document.querySelectorAll('.filter-tasks p')
const $noTasks = document.querySelector('.no-tasks')
const $addTask = document.querySelector('.btn-add-task')
const $inputTask = document.querySelector('#addTask')
const $tasks = document.querySelector('.tasks')
const $clearFinishedTasks = document.querySelector('.clear-completed')

let tasks = []




$filters.forEach($filter => {
    $filter.addEventListener('click', (e) => {
        const filter = e.target.innerHTML
        if (filter === 'All') {
            showTasks(tasks)
        }else if(filter === 'Active') {
            filterTasks(false)
        }else{
            filterTasks(true)
        }
        document.querySelector('.filter-active').classList.remove('filter-active')
        e.target.classList.add('filter-active')
    })
})

$clearFinishedTasks.addEventListener('click', () => {
    tasks = tasks.filter(task => task.finished === false)
    showTasks(tasks)
})


const addEvents = () => {
    const $tasks = document.querySelectorAll('.task')
    const $removesTask = document.querySelectorAll('.remove-task')
    const $checksTasks = document.querySelectorAll('.btn-check-task')
    //Add events to tasks divs
    $tasks.forEach((e, i) => {
        e.addEventListener('mouseover', () => showRemoveTask(i, $removesTask, $checksTasks))
        e.addEventListener('mouseout', () => hideRemoveTask(i, $removesTask, $checksTasks))
    });
    //Add events to removes tasks divs
    $removesTask.forEach(($removeTask, index) => {
        $removeTask.addEventListener('click', () => {
            tasks.splice(index, 1)
            showTasks(tasks)
        })
    })
    //Add events to checks tasks
    $checksTasks.forEach(($checkTask, i) => {
        $checkTask.addEventListener('click', () => {
            tasks[i].finished ? tasks[i].finished = false : tasks[i].finished = true
            showTasks(tasks)
        })
    })
}


$addTask.addEventListener('click', () => addTask())
$inputTask.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
        $addTask.click()
    }
})

const showRemoveTask = (i, $removesTask, $checksTasks) => {
    $removesTask[i].style.display = 'block'
    $checksTasks[i].style.borderColor = 'hsl(220, 98%, 61%)'
}

const hideRemoveTask = (i, $removesTask, $checksTasks) => {
    $removesTask[i].style.display = 'none'
    $checksTasks[i].style.borderColor = 'var(--color4)'
}

const addTask = () => {
    const task = document.querySelector('#addTask').value
    if (task != '') {
        tasks.push({task, finished: false})
        $inputTask.value = ''
        showTasks(tasks)
    } 
}

const showTasks = (tasksToShow) => {
    $tasks.innerHTML = ''
    tasksToShow.length === 0 ? $noTasks.style.display = 'flex' : $noTasks.style.display = 'none' 
    tasksToShow.forEach(task => {
        $tasks.appendChild($createTask(task))
    })
    addEvents()
}

const $createTask = ({task, finished}) => {
    const $task = document.createElement('div')
    const $taskDetail = document.createElement('div')
    const $checkTask = document.createElement('div')
    const $taskText = document.createElement('p')
    const $iconCheck = document.createElement('img')
    const $iconRemove = document.createElement('img')

    $task.classList.add('task')
    $taskDetail.classList.add('task-detail')
    $checkTask.classList.add('btn-check-task')
    finished && $checkTask.classList.add('task-checked')
    finished ? $taskText.classList.add('task-text-checked') : $taskText.classList.add('task-text')
    $iconRemove.classList.add('remove-task')

    $taskText.innerHTML = task

    $iconCheck.alt = 'Check task'
    $iconRemove.alt = 'Remove task'

    $iconCheck.src = './images/icon-check.svg'
    $iconRemove.src = './images/icon-cross.svg'


    $checkTask.appendChild($iconCheck)

    $taskDetail.appendChild($checkTask)
    $taskDetail.appendChild($taskText)

    $task.appendChild($taskDetail)
    $task.appendChild($iconRemove)

    return $task
}

const filterTasks = (finished) => {
    const filteredTasks = tasks.filter((task) => task.finished === finished)
    showTasks(filteredTasks)
}









//initial execute

showTasks(tasks)