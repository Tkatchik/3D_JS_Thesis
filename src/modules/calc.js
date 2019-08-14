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

    //расчёт парамеров в конструкторе
    secondObject.style.display = "none"; //скрытые параметры второго колодца, на случай, если его не выберут
    checkbox[1].checked = false;

    let result = 0; //переменная, в которую будут записываться вычисления

    constructor.addEventListener('change', () => { //вычисления помещены в блок конструктора

        if (checkbox[0].checked) {
            secondObject.style.display = "none";
            result = 10000; // если выбрали только однокамерный септик, то второй будет скрыт вместе с его данными
            //цена однокамерного - 10000
            let options = document.querySelectorAll('.form-control-2 option');
            for (let i = 0, l = options.length; i < l; i++) {
                options[i].selected = options[i].defaultSelected;
            } // выбранные опции "диаметр, кол-во колец" у колодцев
        } else {
            secondObject.style.display = "block";
            result = 15000; //если выбрали двухкамерный септик, его цена 15.000, и он отображается
        }

        formControl.forEach((elem) => {
            if (elem.value == 1) return;
            else result = result + (result * (+elem.value));
        });

        if (checkbox[0].checked) {
            if (checkbox[1].checked) result += 1000;
            else result; //наличие днища. в однокамерном = +1000
        } else {
            if (checkbox[1].checked) result += 2000;
            else result; //в двухкамерном = +2000
        }

        calcResult.value = result; //записываем итоги в переменную result
    });

    //передача данных в форму

    body.addEventListener('change', () => {

        if (myOnOffSwitch.checked) {
            typeSeptic.setAttribute("value", "1 камерный");
        } else {
            typeSeptic.setAttribute("value", "2 камерный");
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

        let selDiam2 = selectDiametrTwo.options[selectDiametrTwo.selectedIndex];
        secondWell.setAttribute("value", selDiam2.text)

        let selWellCount2 = secondWellCoutTwo.options[secondWellCoutTwo.selectedIndex];
        secondWellTwo.setAttribute("value", selWellCount2.text)

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