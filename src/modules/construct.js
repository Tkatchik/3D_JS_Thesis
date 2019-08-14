const construct = () => {
    const panelGroup = document.querySelector('.constructor'), //block
        panelHeading = panelGroup.querySelectorAll('.panel-heading'), //green blocks
        panelCollapse = panelGroup.querySelectorAll('.panel-collapse'), //block content
        constructBtn = panelGroup.querySelectorAll('.construct-btn'); // btn next step

    for (let i = 0; i < panelHeading.length; i++) {
        panelHeading[i].addEventListener('click', () => {
            panelCollapse.forEach((elem) => {
                elem.classList.remove('in');
            });
            panelCollapse[i].classList.add('in');
        });

        constructBtn[i].addEventListener('click', () => {

            if (i !== 3) {
                panelCollapse.forEach((elem) => {
                    elem.classList.remove('in');
                });
                panelCollapse[i + 1].classList.add('in');

            }
        });
    };


}; //construct

export default construct;