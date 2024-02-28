function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number"
    }

    const gatemanCost = 500;
    const lunchCost = 8 * 50;
    const ticketPrice = 120;
    const income = ticketPrice * ticketSale;
    const cost = gatemanCost + lunchCost;
    const remaining = income - cost;
    return remaining;
}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }

    const badSign = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let convertLastLatter = name[name.length - 1].toLowerCase();
    if (badSign.includes(convertLastLatter)) {
        return "Good Name";
    }
    return "Bad Name";
}


function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return 'Invalid Array'
    }
    const myArray = [];
    for (const element of array) {
        if (typeof element === 'number') {
            if (!isNaN(element)) {
                myArray.push(element);
            }
        }
    }
    return myArray;
}

function password(obj) {
    const year = obj.birthYear;
    const changeType = year.toString();
    const digit = changeType.length;


    const propertyNames = Object.keys(obj);
    if (propertyNames.includes('name') !== true || propertyNames.includes('birthYear') !== true || propertyNames.includes('siteName') !== true || digit < 4) {
        return 'invalid';
    }

    const webName = obj.siteName;
    const webNameArray = webName.split('');
    const firstLetter = webNameArray[0].toUpperCase();
    const wordsAfterFirst = webNameArray.slice(1);
    const allWordsAfterFirst = wordsAfterFirst.join('');
    const websiteName = firstLetter + allWordsAfterFirst;

    return websiteName + '#' + obj.name + '@' + obj.birthYear;
}


function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) !== true || isNaN(livingCost)) {
        return 'invalid input';
    }

    let earnings = 0;
    for (const number of arr) {
        earnings += number;
    }
    savings = earnings - livingCost;
    if (savings < 0) {
        return 'earn more';
    }
    else {
        return savings;
    }
}
