const sendForm = () => {
  const errorMessage = 'Упс... Что-то пошло не так!',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const form = document.querySelectorAll('form');

  const statusMessage = document.createElement('div');
        statusMessage.classList.add('success-message'); 

        // statusMessage.style.cssText = 'font-size: 2rem; color: white;'; больше не требуется
        /* этот класс success-message добавлен в css*/


  form.forEach(item => {

    item.addEventListener('submit',(event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const data = new FormData(item);
      let body = {};
      data.forEach((val,key) => {
        body[key] = val;
      }); //все формы на странице

      const userQuest = document.querySelector('input[name="user_quest"]'); //получим все инпуты с вопросом 
      if (userQuest.value) { // в условие запишем введённые пользователем данные!
        body['user_quest'] = userQuest.value;
        userQuest.value = ''
      } /*а далее, наподобие конструкции выше, в пару ключ:значение для JSON-объекта, передадим данные,
      которые пользователь ввёл в поле "вопрос" */


      /*условие нам нужно затем,что в других формах, если его не написать, будет передаваться пустая пара ключ-значение
      {user_quest: ""}

      а ведь форма с вопросом у нас только одна:)
      поэтому мы проверяем поля на соответствие при вводе */
      //остальное всё как обычно

      postData(body)
      .then((response)=>{
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
    return fetch('./server.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/JSON'
      },
      body:JSON.stringify(body)
    });
  };

};
export default sendForm;