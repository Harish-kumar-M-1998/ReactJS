let timer = 10;

function countDown() {
    console.log(timer);
    timer--;
}
let countDownInterval = setInterval(countDown, 1000);



setTimeout(() => {
    clearInterval(countDownInterval);
    if(timer < 1 ){
        console.log('happy valentines day')
        
    }
}, 12000);