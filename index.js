//Людина вводить вік, ви виводите класифікаційну назву віку

const userInputAge = prompt('Enter your age');
if (userInputAge === '' || userInputAge === null || Number.isNaN(Number(userInputAge)) || userInputAge < 0 || userInputAge > 150) {
    console.log('error');
} else if (userInputAge >= 0 && userInputAge < 2) {
    console.log('baby');
} else if (userInputAge >= 2 && userInputAge < 6) {
    console.log('kinder');
} else if (userInputAge >= 6 && userInputAge < 12) {
    console.log('child');
} else if (userInputAge >= 12 && userInputAge < 18) {
    console.log('teenager');
} else if (userInputAge >= 18 && userInputAge < 65) {
    console.log('adult');
} else if (userInputAge >= 65 && userInputAge < 100) {
    console.log('old');
} else if (userInputAge >= 100 && userInputAge <= 150) {
    console.log('respect');
} 
