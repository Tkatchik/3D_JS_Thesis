const calc = () => {

    //calc data
    const body = document.querySelector('body'),
        constructor = document.querySelector('.constructor'),
        checkbox = constructor.querySelectorAll('.onoffswitch-checkbox'),
        secondObject = constructor.querySelector('.second-object'),
        calcResult = document.getElementById('calc-result'),
        formControl = document.querySelectorAll('.form-control'),

        //form data
        myOnOffSwitch = document.querySelector('#myonoffswitch'),
        myOnOffSwitchTwo = document.querySelector('#myonoffswitch-two'),
        typeSeptic = document.querySelector("#type_septik"),
        selectDiametr = document.querySelector('.select-diametr'),
        selectDiametrTwo = document.querySelector('.select-diametr2'),
        firstWell = document.querySelector("#first_well"),
        secondWell = document.querySelector("#second_well"),
        firstWellTwo = document.querySelector("#first_well2"),
        secondWellTwo = document.querySelector("#second_well2"),
        selectWellCout = document.querySelector('.select-well-cout'),
        secondWellCoutTwo = document.querySelector('.select-well-cout2'),
        bottomSeptik = document.querySelector("#bottom_septik"),
        typeSeptik = document.querySelector("#type_septik"),
        distanceToHouse = document.querySelector('#distance_to_house'),
        distanceSeptik = document.querySelector("#distance_septik"),
        priceSeptic = document.querySelector("#price_septik"),
        collapseBtn = document.querySelector('#collapseFour button');

    //calc data in constructor
    secondObject.style.display = "none"; //hidden data - second well
    checkbox[1].checked = false;

    let result = 0; //calc data

    constructor.addEventListener('change', () => { //calc data - constructor block

        if (checkbox[0].checked) {
            secondObject.style.display = "none";
            result = 10000; // if the single type was choosen, the second well is hidden
            //single price - 10000
            let options = document.querySelectorAll('.form-control-2 option');
            for (let i = 0, l = options.length; i < l; i++) {
                options[i].selected = options[i].defaultSelected;
            } // options
        } else {
            secondObject.style.display = "block";
            result = 15000; //double object
        }

        formControl.forEach((elem) => {
            if (elem.value == 1) return;
            else result = result + (result * (+elem.value));
        });

        if (checkbox[0].checked) {
            if (checkbox[1].checked) result += 1000;
            else result; //low. price in single object= +1000
        } else {
            if (checkbox[1].checked) result += 2000;
            else result; //in double object = +2000
        }

        calcResult.value = result; //results
    });

    //send data to form

    body.addEventListener('change', () => {

        if (myOnOffSwitch.checked) {
            typeSeptic.setAttribute("value", "1 камерный");
        } else {
            typeSeptic.setAttribute("value", "2 камерный");

            let selDiam2 = selectDiametrTwo.options[selectDiametrTwo.selectedIndex];
            secondWell.setAttribute("value", selDiam2.text)

            let selWellCount2 = secondWellCoutTwo.options[secondWellCoutTwo.selectedIndex];
            secondWellTwo.setAttribute("value", selWellCount2.text)

        }

        if (myOnOffSwitchTwo.checked) {
            bottomSeptik.setAttribute("value", "Нужно днище");
        } else {
            typeSeptik.setAttribute("value", "Не нужно днище");
        }

        let selDiam = selectDiametr.options[selectDiametr.selectedIndex];
        firstWell.setAttribute("value", selDiam.text);

        let selWellCount = selectWellCout.options[selectWellCout.selectedIndex];
        firstWellTwo.setAttribute("value", selWellCount.text)

        let result_septic = calcResult.value;
        priceSeptic.setAttribute("value", result_septic);

        let dist_septic = distanceToHouse.value;
        distanceSeptik.setAttribute("value", dist_septic);
    });

    collapseBtn.addEventListener("click", function() {
        let result_septic = calcResult.value;
        priceSeptic.setAttribute("value", result_septic);
    });

};
export default calc;