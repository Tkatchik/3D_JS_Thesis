const popupDiscount = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message');
        if (message) {
            message.parentNode.removeChild(message);
        }
    };
    const sentence = document.querySelector('.sentence');
    sentence.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target.matches('.sentence-btn')) {
            const popup = document.querySelector('.popup-discount');
            popup.style.display = 'block';

            popup.addEventListener('click', (event) => {
                let target = event.target;

                if (target.matches('.popup-close')) {
                    popup.style.display = 'none';
                    statusMess();
                } else if (target.matches('.popup-discount:not(.popup-content)')) {
                    popup.style.display = 'none';
                    statusMess();
                }
            });
        }
    });
};
export default popupDiscount;