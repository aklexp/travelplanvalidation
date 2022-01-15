"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const validationObj = {};
function Required(target, name) {
    console.log(target);
    const className = target.constructor.name;
    //retreving all properties in an array
    validationObj[className] = Object.assign(Object.assign({}, validationObj[className]), { [name]: ['required'] });
    console.log(validationObj);
}
function validate(obj) {
    let validatorName = validationObj[obj.constructor.name];
    if (!validatorName) {
        return true;
    }
    let isValid = true;
    for (const prop in validatorName) {
        for (const validator of validatorName[prop]) {
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
            }
        }
    }
    return isValid;
}
class Filter {
    constructor(_plan) {
        this.plan = _plan;
    }
}
__decorate([
    Required
], Filter.prototype, "plan", void 0);
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //get all elements
    const planE1 = document.getElementById('plan_search');
    const plan = planE1.value;
    const courseObj = new Filter(plan);
    if (!validate(courseObj)) {
        alert('Please enter something first to searchss');
        return;
    }
    console.log(courseObj);
});
