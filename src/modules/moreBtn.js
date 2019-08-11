const moreBtn = () => {
    let moreBtn = document.querySelector('.add-sentence-btn');
    moreBtn.addEventListener('click', (event) => {

        let target = event.target;

        if (target === moreBtn) {
            const shadowBlock = document.querySelectorAll('.shadow-block');
            shadowBlock.style.display = 'show';
        };
    });
};

export default moreBtn;