import { DateTime } from './modules/luxon.js';
import methods from './modules/methods.js'; //eslint-disable-line
import clearWhenClick from './modules/inpFields.js';
import navigator from './modules/navMenu.js';
import addFormData from './modules/formMethod.js';

const date = document.querySelector('#date');

addFormData();
navigator();
clearWhenClick();

const dt = DateTime.now();
date.textContent = dt.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL);
