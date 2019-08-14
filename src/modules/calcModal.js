const calcModal = () => {
    //popup in calc
    const popupDiscount2 = document.querySelector('.popup-discount2'),
        btn = document.querySelector('.send-calc-form');

    btn.addEventListener('click', () => {
        popupDiscount2.style.display = "block";
    });

    popupDiscount2.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close') || target.classList.contains('popup')) {
            popupDiscount2.style.display = "none";
        }
    });
};

export default calcModal;