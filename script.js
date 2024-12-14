"use strict";

const currencyValue = 26; 

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const hryvnias = dollars * currencyValue;
    console.log(`${dollars} dollars = ${hryvnias} hryvnias`);
}
