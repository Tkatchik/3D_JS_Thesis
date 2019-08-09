const popupConsult = () => {

    const statusMess = () => {
        const message = document.querySelector('.success-message'); //получаем стиль сообщения
        if (message) { //и когда оно показалось
            message.parentNode.removeChild(message); //убираем дубликат
        }/* откуда дубликат, спросишь ты? дело в том, что форма с вопросом + модалка - это как бы 2 формы. 
        Чтобы не наблюдать 2 сообщения, при появлении одного - другое удалится*/
    }; 
    
    /*то есть, здесь мы обращаемся к классу CSS, о существовании которого ты уже знаешь, взглянув на sendAllForms
    так как каждое модальное окно у нас отправляет формы, то в каждом из них должно быть сообщение о статусе
    методы parentNode и removeChild разбирали на уроках, ещё когда редактировали книгу, помнишь?*/

    const director = document.querySelector('.director'), //получаем обёртку блока
            consultBtn = document.querySelector('.consultation-btn');

            director.addEventListener('click',(event) => { // на обёртку - обработчик по клику
                event.preventDefault();
                let target = event.target;

                if (target === consultBtn) { //если нажали на кнопку модалки

                const popupConsult = document.querySelector('.popup-consultation');
                popupConsult.style.display = 'block'; //то она выскакивает

                popupConsult.addEventListener('click',(event) => {
                     //а потом можно и на модалку обработчик навесить
                    let target = event.target; 

                    if(target.matches('#consult-close')) {
                    statusMess(); 
                    popupConsult.style.display = 'none';

                    } else if (target.matches(".popup-consultation:not(#popup-consult)")) {
                        statusMess();
                        popupConsult.style.display = 'none';
                    }

                    /* по условию они закрываются на клик по крестику - и вне области окошка. 
                    но также нам при отправке формы из модалок нужно видеть статус-сообщение.
                    можешь вызвать statusMess здесь же*/
                });
            }
        });
};
export default popupConsult;