const $toLight = document.querySelector('#toLight') 
const $toDark = document.querySelector('#toDark') 


$toDark.addEventListener('click', () => changeTheme(true))
$toLight.addEventListener('click', () => changeTheme(false))


const changeTheme = (theme) => {
    $backgroundImage = document.querySelector('.background-image-container img')
    $root = document.documentElement

    if (theme) {
        $backgroundImage.src = './images/bg-desktop-dark.jpg'
        $toDark.style.display = 'none'
        $toLight.style.display = 'block'
        $root.style.setProperty('--color3', 'hsl(235, 24%, 19%)')
        $root.style.setProperty('--color1', 'hsl(235, 21%, 11%)')
        $root.style.setProperty('--color2', 'hsl(233, 11%, 84%)')
        $root.style.setProperty('--color4', 'hsl(233, 11%, 32%)')
        $root.style.setProperty('--color5', 'hsl(233, 3%, 46%)')
    }else{
        $backgroundImage.src = './images/bg-desktop-light.jpg'
        $toDark.style.display = 'block'
        $toLight.style.display = 'none'
        $root.style.setProperty('--color1', '#fafafa')
        $root.style.setProperty('--color2', 'hsl(235, 19%, 35%)')
        $root.style.setProperty('--color3', '#f6f6f6')
        $root.style.setProperty('--color4', 'hsl(236, 33%, 92%)')
        $root.style.setProperty('--color5', 'hsl(233, 11%, 84%)')
    }
}