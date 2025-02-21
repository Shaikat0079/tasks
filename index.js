function cashOut(money) {
    if (typeof (money) !== "number" || money < 0) {
        return "Invalid";
    }

    return (money * 1.75) / 100;
}

function validEmail(email) {
    if (typeof (email) !== "string") {
        return "Invalid"
    }
    else if (email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.includes(" ") || email.includes("-") || !email.includes(".com")) {
        return false;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);

}

function electionResult(votes) {
    if (Array.isArray(votes)) {
        let mango = 0;
        let banana = 0;
        for (const vote of votes) {
            if (vote === "mango") {
                mango++;
            }
        }
        for (const vote of votes) {
            if (vote === "banana") {
                banana++;
            }
        }
        if (banana > mango) {
            return "Banana";
        }
        else if (mango > banana) {
            return "Mango";
        }
        else if (mango === banana) {
            return "Draw"
        }
    }
    return "Invalid"
}

function isBestFriend(f1, f2) {
    if (typeof f1 === 'object' && typeof f2 === 'object') {
        if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
            return true;
        }
        return false;
    }
    return "Invalid"
}


function  calculateWatchTime( times ) {
    let total = 0;
    for(const time of times){
        if(typeof(time)!=="number"){
            return "Invalid";
        }
    }
    for(const time of times){
        if(typeof(time === 'number')){
            total += time;
        }
    }
    let hours = Math.floor(total/3600);
    let minutes = Math.floor((total%3600)/60);
    let seconds = total%60;
    return timeObject = {
        hour: hours,
        minute: minutes,
        second: seconds
    };
}

// 

const student = {
    sName: 'Sakib Khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Aamir'],
    car:{
        brand: 'Toyota',
        price: 60000,
        madea: 2025,
        model: "GR Yaris"
    },
    study:function () {
        return "He is doing web development course"
    }
}

console.log(student.friends)
console.log(student.car)
console.log(student.study())