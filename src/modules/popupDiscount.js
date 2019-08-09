const popupDiscount = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message');
        if (message) {
            message.parentNode.removeChild(message);
        }
    };
    const checkBtn = document.querySelector('.check-button');
    checkBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const popupDisc = document.querySelector('.popup-discount');
        popupDisc.style.display = 'block';

        popupDisc.addEventListener('click', (event) => {
            let target = event.target;
            if (target.matches('.popup-close')) {
                popupDisc.style.display = 'none';
                statusMess();
            } else if (target.matches(".popup-discount:not(.popup-content)")) {
                popupDisc.style.display = 'none';
                statusMess();
            }
        });
    });
};
export default popupDiscount;