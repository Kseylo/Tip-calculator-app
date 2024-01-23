const bill = document.getElementById('bill') as HTMLInputElement;
const customTip = document.getElementById('customInput') as HTMLInputElement;
const numberOfPeople = document.getElementById('numberOfPeople') as HTMLInputElement;
const tipButtons = document.getElementById('selectTip')!.querySelectorAll('button');
const tipAmount = document.getElementById('tipAmount')!;
const total = document.getElementById('total')!;
const resetButton = document.getElementById('resetButton')!;

let activeButton: HTMLButtonElement | null = null;

let billValue = 0;
let tipValue = 0;
let numberOfPeopleValue = 0;

function calculateTip() {
    if (billValue && tipValue && numberOfPeopleValue) {
        const tipPerPerson = (billValue * (tipValue / 100)) / numberOfPeopleValue;
        const totalPerPerson = billValue / numberOfPeopleValue + tipPerPerson;
        tipAmount.innerText = `$${tipPerPerson.toFixed(2)}`;
        total.innerText = `$${totalPerPerson.toFixed(2)}`;
        resetButton.classList.add('bg-primary-strong-cyan');
        resetButton.classList.add('hover:bg-hover');
        resetButton.removeAttribute('disabled');
    } else {
        tipAmount.innerText = '$0.00';
        total.innerText = '$0.00';
    }
}

bill.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    billValue = Number(target.value);
    calculateTip();
});

tipButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        customTip.value = '';
        if (target === activeButton) {
            target.classList.remove('bg-primary-strong-cyan');
            target.classList.remove('text-neutral-very-dark-cyan');
            target.classList.add('text-neutral-white');
            tipValue = 0;
            activeButton = null;
        } else {
            if (activeButton) {
                activeButton.classList.remove('bg-primary-strong-cyan');
                activeButton.classList.remove('text-neutral-very-dark-cyan');
                activeButton.classList.add('text-neutral-white');
            }
            target.classList.add('bg-primary-strong-cyan');
            target.classList.remove('text-neutral-white');
            target.classList.add('text-neutral-very-dark-cyan');
            tipValue = Number(target.innerText.split('%')[0]);
            activeButton = target;
        }
        calculateTip();
    });
});

customTip.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    if (activeButton) {
        activeButton.classList.remove('bg-primary-strong-cyan');
        activeButton.classList.remove('text-neutral-very-dark-cyan');
        activeButton.classList.add('text-neutral-white');
    }
    tipValue = Number(target.value);
    calculateTip();
});

numberOfPeople.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    numberOfPeopleValue = Number(target.value);
    calculateTip();
});

resetButton.addEventListener('click', () => {
    bill.value = '';
    customTip.value = '';
    numberOfPeople.value = '';
    activeButton?.classList.remove('bg-primary-strong-cyan');
    activeButton?.classList.remove('text-neutral-very-dark-cyan');
    activeButton?.classList.add('text-neutral-white');
    activeButton = null;
    resetButton.setAttribute('disabled', 'true');
    resetButton.classList.remove('bg-primary-strong-cyan');
    resetButton.classList.remove('hover:bg-hover');
    tipValue = 0;
    billValue = 0;
    numberOfPeopleValue = 0;
    tipAmount.innerText = '$0.00';
    total.innerText = '$0.00';
});
