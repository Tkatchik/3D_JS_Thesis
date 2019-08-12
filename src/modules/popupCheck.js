const popupCheck = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message');
        if (message) {
            message.parentNode.removeChild(message);
        }
    };
    const checkBtn = document.querySelector('.check-btn');
    checkBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target === checkBtn) {
            const popupCheck = document.querySelector('.popup-check');
            popupCheck.style.display = 'block';

            popupCheck.addEventListener('click', (event) => {
                let target = event.target;

                if (target.matches('.popup-close')) {
                    popupCheck.style.display = 'none';
                    statusMess();
                } else if (target.matches('.popup-check')) {
                    popupCheck.style.display = 'none';
                }
            });
        }
    });
};
export default popupCheck;