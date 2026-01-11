const calculator = document.querySelector(`.calculator`);
const keys = document.querySelector(`.calculator_keys`);

keys.addEventListener(`click`, e => {
    if(e.target.matches(`button`)) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;

        if(!action) {
            console.log('number key!');
            if (displayNum === '0') {
                display.textContent = keyContent;
            }
        }

        if(!action) {
            if (displayNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
        }

        if (action === 'display') {
            display.textContent = displayNum + '.';
        }

        if (
            action == `add` ||
            action == `subtract` ||
            action == `multiply` ||
            action == `divide`
        ) {
            console.log(`operator key`);
        }

        if (action == `decimal`) {
            console.log(`decimal key`);
        }

        if (action == `clear`) {
            console.log(`clear key`);
        }

        if (action == `calculate`) {
            console.log(`equal key`);
        }

        if (
            action == `add` ||
            action == `subtract` ||
            action == `multiply` ||
            action == `divide`
        ) {
            key.classList.add('is-depressed')
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));

        

    }
})

