function menuToggle(){
    const menu = document.getElementById('menu');
    const button = document.getElementById('menubutton');
    const buttonImg = document.getElementById('menubutton_img');
    const exitbuttonImg = document.getElementById('exitbutton_img')

    if(menu.style.right == '-100vw'){
        menu.style.right = '0';
        button.style.left = '10px';
        button.style.border-color = 'var(--bg_d1)'

        buttonImg.style.display = 'none';
        exitbuttonImg.style.display = 'block';
    }
    else{
        menu.style.right = '-100vw';
        button.style.left = '-55px';
        button.style.border-color = 'var(--primary_d1)'


        buttonImg.style.display = 'block';
        exitbuttonImg.style.display = 'none';
    }
}