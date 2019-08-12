'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import popupConsult from './modules/popupConsultForm';
import validationPhone from './modules/validationPhone';
import sendForm from './modules/sendAllForms';
import popupDiscount from './modules/popupDiscount';
import popupCall from './modules/popupCall';
import popupCheck from './modules/popupCheck';
import moreBtn from './modules/moreBtn';
import accordion from './modules/accordion';
import construct from './modules/construct';



popupConsult();
validationPhone();
sendForm();
popupDiscount();
popupCall();
popupCheck();
moreBtn();
accordion();
construct();