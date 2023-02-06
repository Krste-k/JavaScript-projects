//   54.08.22 6  saaati////// 

let option = ("\n1. TeaSpoons(UK) \n2. TeaSpoons(US) \n3. TableSpoons(UK) \n4. TableSpoons(US) ");
let sum = parseFloat(prompt("convert " + option));
let teaUk = 1.20095
let teaUs = 0.832674
let tableUk = 0.333333
let tableUs = 0.400317
let teUsToTabUk = 0.277558
let tabUkToTeaUs = 3.60285
let tabUkToTabUs = 1.20095

if (sum === 1) {
    let option1 = ("\n1. TeaSpoons(US) \n2. TableSpoons(UK) \n3. TableSpoons(US) ");
    let convert = parseFloat(prompt("TeaSpoon (UK) To: " + option1));
    if (convert === 1) {
        let pro = (prompt("TeaSpoon (UK) To TeaSpoons (US)"))
        let teaSuk = (pro * teaUk);
        alert("is " + teaSuk + " (US) TeaSpoon");
    }

    if (convert === 2) {
        let pro1 = (prompt("TeaSpoon (UK) To TableSpoons(UK)"))
        let tabUk = (pro1 * tableUk);
        alert("is " + tabUk + " (UK) TableSpoons");
    }

    else if (convert === 3) {
        let pro2 = (prompt("TeaSpoon (UK) To TableSpoons(US)"))
        let tabUs = (pro2 * tableUs)
        alert("Is " + tabUs + " (US) TableSpoons")
    }

}
if (sum === 2) {
    let option2 = ("\n1. TeaSpoons(UK) \n2. TableSpoons(UK) \n3. TableSpoons(US) ");
    let convert1 = parseFloat(prompt("TeaSpoon (US) To: " + option2));
    if (convert1 === 1) {
        let prom = (prompt("TeaSpoon (US) To TeaSpoons (UK)"))
        let teaSuk1 = (prom * teaUs);
        alert("is " + teaSuk1 + " (Uk) TeaSpoon");

    }

    if (convert1 === 2) {
        let prom1 = (prompt("TeaSpoon (US) To TableSpoons(UK)"))
        let tabUk1 = (prom1 * teUsToTabUk);
        alert("is " + tabUk1 + " (UK) TableSpoons");
    }

    else if (convert1 === 3) {
        let prom2 = (prompt("TeaSpoon (US) To TableSpoons(US)"))
        let tabUs1 = (prom2 * tableUk)
        alert("Is " + tabUs1 + " (US) TableSpoons")
    }

}

if (sum === 3) {
    let option3 = ("\n1. TeaSpoons(UK) \n2. TeaSpoons(US) \n3. TableSpoons(US) ");
    let covert2 = parseFloat(prompt("TableSpoons (UK) To : " + option3));
    if (covert2 === 1) {
        let prom3 = (prompt("TableSpoons (UK) To TeaSpoons (UK) "));
        let tabUk1 = (prom3 / tableUk);
        alert("is " + tabUk1 + " (UK) TeaSpoons");
    }

    if (covert2 === 2) {
        let prom4 = (prompt("TableSpoons (UK) To TeaSpoons (US)"));
        let tabUs = (prom4 * tabUkToTeaUs)
        alert("is " + tabUs + " (US) TeaSpoons");
    }

    else if (covert2 === 3) {
        let prom5 = (prompt("TableSpoons (UK) To TableSpoons(US) "))
        let taToTa = (prom5 * tabUkToTabUs);
        alert("is " + taToTa + " (US) TableSpoons");
    }


}

if (sum === 4) {
    let option4 = ("\n1. TeaSpoons(UK) \n2. TeaSpoons(US) \n3. TableSpoons(UK) ");
    let convert3 = parseFloat(prompt("TableSpoons (US) To " + option4));
    if (convert3 === 1) {
        let prom5 = (prompt("TableSpoons (US) To TeaSpoons (UK)"));
        let usTaTo = (prom5 * teaUs * 3)
        alert("is " + usTaTo + " (Uk) TeaSpoons");
    }

    if (convert3 === 2) {
        let prom6 = (prompt("TableSpoons (US) To TeaSpoons (US)"));
        let taToTe = (prom6 * tableUk * 3);
        alert("is " + taToTe + " (US) TeaSpoons");
    }

    else if (convert3 === 3) {
        let prom7 = (prompt("TableSpoons (US) To TableSpoons(UK) "));
        let toToTo = (prom7 / tabUkToTabUs);
        alert("is " + toToTo + " (UK) TeaSpoons");
    }

} 
