const moreBtn = () => {
    const moreBtn = document.querySelector('.add-sentence-btn'),
        hidden = document.querySelectorAll('.hidden');

    moreBtn.addEventListener('click', () => {
        hidden.forEach(item => {
            item.classList.remove('hidden');
        });

        moreBtn.style.display = 'none';
    });
};

export default moreBtn;