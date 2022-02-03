import {Invoice} from './classes/invoice.js';
import { Listtemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/payment.js';
import {HasFormatter} from './interfaces/HasFormatter';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = form.querySelector('#type') as HTMLSelectElement;
const tofrom = form.querySelector('#tofrom') as HTMLInputElement;
const details = form.querySelector('#details') as HTMLInputElement;
const amount = form.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new Listtemplate(ul);

let values: [string, string, number];
values = [tofrom.value, details.value, amount.valueAsNumber];

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
})


