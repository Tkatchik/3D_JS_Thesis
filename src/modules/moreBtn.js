const moreBtn = () => {
    let moreBtn = document.querySelector('.sentence');
    moreBtn.addEventListener('click', (event) => {

        let target = event.target;

        if (target.matches('.add-sentence-btn')) {
            const shadowBlock = document.querySelectorAll('.shadow-block');
            shadowBlock.style.display = 'block';
        };
    });
};

export default moreBtn;