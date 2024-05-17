function menuToggle(){
    const menu = document.getElementById('menu');
    const button = document.getElementById('menubutton');

    if(menu.style.right =! '0'){
        menu.style.right = '0';
        button.style.left = '10px';
    }
    else{
        menu.style.right = '-100vw';
        button.style.left = '-55px';
    }
}