const $toLight = document.querySelector('#toLight') 
const $toDark = document.querySelector('#toDark') 

let bgImages
let theme = true

const whatBg = () => {
    if (window.innerWidth > 480) {
        bgImages = './images/desktop'
    } else {
        bgImages = './images/mobile'
    }
}


//initial execution
whatBg()

document.querySelector('.background-image-container img').src = `${bgImages}/bg-light.jpg`


$toDark.addEventListener('click', () => {
    changeTheme(theme)
    theme = !theme
})
$toLight.addEventListener('click', () => {
    changeTheme(theme)
    theme = !theme
})

//functions
const changeTheme = (theme) => {
    $backgroundImage = document.querySelector('.background-image-container img')
    $root = document.documentElement

    if (theme) {
        $backgroundImage.src = `${bgImages}/bg-dark.jpg`
        $toDark.style.display = 'none'
        $toLight.style.display = 'block'
        $root.style.setProperty('--color3', 'hsl(235, 24%, 19%)')
        $root.style.setProperty('--color1', 'hsl(235, 21%, 11%)')
        $root.style.setProperty('--color2', 'hsl(233, 11%, 84%)')
        $root.style.setProperty('--color4', 'hsl(233, 11%, 32%)')
        $root.style.setProperty('--color5', 'hsl(233, 3%, 46%)')
    }else{
        $backgroundImage.src = `${bgImages}/bg-light.jpg`
        $toDark.style.display = 'block'
        $toLight.style.display = 'none'
        $root.style.setProperty('--color1', '#fafafa')
        $root.style.setProperty('--color2', 'hsl(235, 19%, 35%)')
        $root.style.setProperty('--color3', '#f6f6f6')
        $root.style.setProperty('--color4', 'hsl(236, 33%, 92%)')
        $root.style.setProperty('--color5', 'hsl(233, 11%, 84%)')
    }
}

