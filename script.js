function menuToggle(){
    const menu = document.getElementById('menu');
    const button = document.getElementById('menubutton');
    const buttontoggle = document.getElementById('exitmenubutton').style.opacity;

    if(menu.style.right =! '0'){
        menu.style.right = '0';
        button.style.left = '10px';
    }
    else{
        menu.style.right = '-100vw';
        button.style.left = '-55px';
    }
    if(buttontoggle == 0){
        buttontoggle = 1;
    }
    else{
        buttontoggle = 0;
    }
}