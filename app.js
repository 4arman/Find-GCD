const firstNum = document.querySelector('.first-number');
const secondNum = document.querySelector('.second-number');
const btn = document.querySelector('.find-btn');
const result = document.querySelector('.denominator');

btn.addEventListener('click', () => {
    let num1 = parseInt(firstNum.value);
    let num2 = parseInt(secondNum.value);

    let gcd = findGCD(num1, num2);
    let lcm = (num1 * num2) / gcd;

    result.textContent = lcm;
});

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
