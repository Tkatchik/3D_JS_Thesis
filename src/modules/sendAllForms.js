const sendForm = () => {
    const errorMessage = 'Упс... Что-то пошло не так!',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('success-message');

    form.forEach(item => {

        item.addEventListener('submit', (event) => {
            event.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const data = new FormData(item);
            let body = {};
            data.forEach((val, key) => {
                body[key] = val;
            }); // all forms

            const userQuest = document.querySelector('input[name="user_quest"]'); // question input 
            if (userQuest.value) {
                body['user_quest'] = userQuest.value;
                userQuest.value = ''
            }

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("Status network not 200")
                    }
                    statusMessage.innerHTML = successMessage;
                    item.reset();

                })
                .catch(error => {
                    console.error(error);
                    statusMessage.innerHTML = errorMessage;
                });
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(body)
        });
    };

};
export default sendForm;