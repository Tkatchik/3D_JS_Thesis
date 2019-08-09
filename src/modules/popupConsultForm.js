const popupConsult = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message'); //style
        if (message) {
            message.parentNode.removeChild(message);
        }
    };
    const director = document.querySelector('.director'), //wrapper
        consultBtn = document.querySelector('.consultation-btn');

    director.addEventListener('click', (event) => { // click - wrapper
        event.preventDefault();
        let target = event.target;

        if (target === consultBtn) { //modal button

            const popupConsult = document.querySelector('.popup-consultation');
            popupConsult.style.display = 'block';

            popupConsult.addEventListener('click', (event) => {

                let target = event.target;

                if (target.matches('#consult-close')) {
                    statusMess();
                    popupConsult.style.display = 'none';

                } else if (target.matches(".popup-consultation:not(#popup-consult)")) {
                    statusMess();
                    popupConsult.style.display = 'none';
                }
            });
        }
    });
};
export default popupConsult;