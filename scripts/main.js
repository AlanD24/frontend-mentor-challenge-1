window.addEventListener('load', () => {
    const menu = document.querySelector('#show-menu');
    const headerFields = document.querySelector('.header-fields');
    const background_Grey = document.querySelector('.background-grey');
    
    let status = true;

    menu.addEventListener('click', () => {
        status = !status;
        if(status === false) {
            headerFields.style.right = '0';
            background_Grey.style.display = 'block';
            menu.style.backgroundImage = 'url("./images/icon-close-menu.svg")';
            menu.style.backgroundRepeat = 'no-repeat';
            menu.style.height = '26px';
        } else {
            headerFields.style.right = '-100%';
            background_Grey.style.display = 'none'
            menu.style.backgroundImage = 'url("./images/icon-menu.svg")';
        }
    });
});