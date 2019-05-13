//LONG RUN FUNCTION

function waitThreeSecond() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
        console.log('finished function');
    }

function clickHandler() {
    console.log('click event!');
}


//listen for the click event
document.addEventListener('click', clickHandler);
waitThreeSecond();
console.log('finished execution');

