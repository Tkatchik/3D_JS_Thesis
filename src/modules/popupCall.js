const popupCall = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message');
        if (message) {
            message.parentNode.removeChild(message);
        }
    };
    const links = document.querySelectorAll('header a');
    //no scroll
    links.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const popup = document.querySelector('.popup-call');
            popup.style.display = 'block';

            popup.addEventListener('click', (e) => {
                let target = e.target;
                if (target.matches('.popup-close')) {
                    popup.style.display = 'none';
                    statusMess();
                } else if (target.matches('.popup-call')) {
                    popup.style.display = 'none';

                }
            });
        });
    });
};
export default popupCall;