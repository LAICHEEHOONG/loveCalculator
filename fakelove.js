// let n = Math.random();

// const randomPercentages = (num) => {
//     return Math.floor(num * 101);
// }

// console.log(`${randomPercentages(n)}%`);

// prompt('what is your name?');
// prompt('your couple name?');

// alert(`Match: ${randomPercentages(n)}%`);

const yourName = () => {
    let nameInput = document.querySelector('.yourname').value;
    nameInput = `${(nameInput.slice(0, 1)).toUpperCase()}${(nameInput.slice(1, nameInput.length)).toLowerCase()}`;
    return nameInput;
    //return document.querySelector('.yourname').value;
}

const yourcrush = () => {
    let crushInput = document.querySelector('.yourcrush').value;
    crushInput = `${(crushInput.slice(0, 1)).toUpperCase()}${(crushInput.slice(1, crushInput.length)).toLowerCase()}`;
    return crushInput;
   //return document.querySelector('.yourcrush').value;
}

const love100 = () => {
    const x = yourName();
    const y = yourcrush();
    const z = () => document.querySelector('.percentage').insertAdjacentHTML('afterbegin', '100% ❤️');

    if(x === 'Lai chee hoong' && y === 'Thu zar myo') {
        z();
    } else if(x === 'Lai chee hoong' && y === 'Myo thu zar') {
        z();
    } else if(x === 'Lai chee hoong' && y === 'Aatial') {
        z();
    } else if(x === 'Lai chee hoong' && y === 'Ca hlei tial') {
        z();
    } else if(x === 'Lai chee hoong' && y === 'Thu zar') {
        z();
    } else if(x === 'Lai chee hoong' && y === 'Park') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Thu zar myo') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Myo thu zar') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Aatial') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Ca hlei tial') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Thu zar') {
        z();
    } else if(x === 'Chee hoong lai' && y === 'Park') {
        z();
    } else if(x === 'Hoong' && y === 'Thu zar myo') {
        z();
    } else if(x === 'Hoong' && y === 'Myo thu zar') {
        z();
    } else if(x === 'Hoong' && y === 'Aatial') {
        z();
    } else if(x === 'Hoong' && y === 'Ca hlei tial') {
        z();
    } else if(x === 'Hoong' && y === 'Thu zar') {
        z();
    } else if(x === 'Hoong' && y === 'Park') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Thu zar myo') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Myo thu zar') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Aatial') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Ca hlei tial') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Thu zar') {
        z();
    } else if(y === 'Lai chee hoong' && x === 'Park') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Thu zar myo') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Myo thu zar') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Aatial') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Ca hlei tial') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Thu zar') {
        z();
    } else if(y === 'Chee hoong lai' && x === 'Park') {
        z();
    } else if(y === 'Hoong' && x === 'Thu zar myo') {
        z();
    } else if(y === 'Hoong' && x === 'Myo thu zar') {
        z();
    } else if(y === 'Hoong' && x === 'Aatial') {
        z();
    } else if(y === 'Hoong' && x === 'Ca hlei tial') {
        z();
    } else if(y === 'Hoong' && x === 'Thu zar') {
        z();
    } else if(y === 'Hoong' && x === 'Park') {
        z();
    } 
    
    
}

const randomPercentages = () => {
    let x = document.querySelector('.yourname').value;
    let y = document.querySelector('.yourcrush').value;
    if(x != '' || y != '') {
        let n = Math.random();
        const nPercentages = Math.floor(n * 101);
        return `${nPercentages}% ❤️`;
    } else {
        return '';
    }
}


const calcLove = () => {

   document.querySelector('.me').innerHTML = '';
   document.querySelector('.park').innerHTML = '';
   document.querySelector('.percentage').innerHTML = '';
    
   if((yourName() === 'Lai chee hoong' || yourName() === 'Hoong' || yourName() === 'Chee hoong lai') && (yourcrush() === 'Thu zar myo' || yourcrush() === 'Myo thu zar' || yourcrush() === 'Aatial' || yourcrush() === 'Ca hlei tial' || yourcrush() === 'Thu zar' || yourcrush() === 'Park')) {
        document.querySelector('.me').insertAdjacentHTML('afterbegin', yourName());
        document.querySelector('.park').insertAdjacentHTML('afterbegin', yourcrush());
        love100();
    } else if((yourcrush() === 'Lai chee hoong' || yourcrush() === 'Hoong' || yourcrush() === 'Chee hoong lai') && (yourName() === 'Thu zar myo' || yourName() === 'Myo thu zar' || yourName() === 'Aatial' || yourName() === 'Ca hlei tial' || yourName() === 'Thu zar' || yourName() === 'Park')) {
        document.querySelector('.me').insertAdjacentHTML('afterbegin', yourName());
        document.querySelector('.park').insertAdjacentHTML('afterbegin', yourcrush());
        love100();
    } else {
        document.querySelector('.me').insertAdjacentHTML('afterbegin', yourName());
        document.querySelector('.park').insertAdjacentHTML('afterbegin', yourcrush());
        document.querySelector('.percentage').insertAdjacentHTML('afterbegin', randomPercentages());
    }

   

   document.querySelector('.yourname').value = '';
   document.querySelector('.yourcrush').value = '';
   
}

$('.form-control').keyup((event) => {
    if (event.keyCode === 13) {
        $(".btn").click();
    }
});
