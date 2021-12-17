$controls = document.querySelector('.filter-tasks')
$card = document.querySelector('.card')
$leftTasks = document.querySelectorAll('.card-footer div')[0]
$backgroundImage = document.querySelector('.background-image-container img')

window.innerWidth > 480 ? $leftTasks.after($controls) : $card.appendChild($controls)

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 480){
        $leftTasks.after($controls)
    }else{
        $card.appendChild($controls)
    }
    whatBg()
    theme ? $backgroundImage.src = `${bgImages}/bg-light.jpg` : $backgroundImage.src = `${bgImages}/bg-dark.jpg` 
})

