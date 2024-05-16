function menuToggle(){
    const menu = document.getElementById('menu')
    if(menu.style.right == -100vw){
        menu.style.right = 0;
    }
    else{
        menu.style.right = -100vw;
    }
}