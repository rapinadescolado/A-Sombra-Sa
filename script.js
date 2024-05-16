function menuToggle(){
    const menu = document.getElementById('menu')
    if(menu.style.right != 0){
        menu.style.right = 0;
    }
    else{
        menu.style.right = -100vw;
    }
}