const validationPhone = () => {
    const phone = document.querySelectorAll('.phone-user');
    phone.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[^\d]/g, '');
        });
    });
};

export default validationPhone;