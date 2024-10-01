let maximum = parseInt(prompt('masukan nilai maksimal'));
while (!maximum) {
    maximum = parseInt(prompt('masukan nilai maksimal'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan pertama kamu!'));
let attempts = 1;

while (parseInt(guess)!== targetNum) {
    attempts = 1;
    if (guess > targetNum) {
        guess = prompt('terlalu tinggi! tebak lagi:');
    } else {
        guess = prompt('terlalu rendah! tebak lagi:');
    }
}
alert (`selamat tebakan anda benar!! dengan percobaan ${attempts} kali`);
