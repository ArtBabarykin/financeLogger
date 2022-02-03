import { Invoice } from './classes/invoice.js';
import { Listtemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
const type = form.querySelector('#type');
const tofrom = form.querySelector('#tofrom');
const details = form.querySelector('#details');
const amount = form.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new Listtemplate(ul);
let values;
values = [tofrom.value, details.value, amount.valueAsNumber];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});

