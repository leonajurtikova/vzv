const hamburger = (element) => {
    element.classList.toggle(`${element.classList[0]}--open`);
    const navigation = element.parentElement.getElementsByClassName('menu__navigation')[0];
    navigation.classList.toggle('menu__navigation--active');
    document.getElementsByTagName('body')[0].classList.toggle('hamburger-open');
}


const setFooterHeight = () => {
    const height = document.getElementsByClassName('footer')[0].offsetHeight;
    const container = document.getElementsByClassName('container--main')[0];
    container.style.setProperty('--footerHeight', `${height}px`);
}

setFooterHeight();

window.onresize = setFooterHeight;
