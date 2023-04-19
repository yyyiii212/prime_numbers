const list = document.querySelector("#li1");
const put1 = document.querySelector(".inp");
const btn = document.querySelector(".btn");
let arr = [];


btn.addEventListener("click", function (i) {
    arr.length = 0;
    let contant = "";

    for (let i = 2; i <= put1.value; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arr.push(i);
        }
    }
    arr.forEach(function (i, index, array) {
        if (index == array.length - 1) {
            contant += i;
        } else {
            contant += i + " , ";
        }

    })
    let result = `<li>${contant}</li>`;
    console.log(arr);
    put1.value = null;
    list.innerHTML = result;

});
document.addEventListener("keyup", function (event) {
    if (event.code === 'Space') {
        window.location.reload();
    }
});