var prompt = require('prompt-sync')();

const seribu = 1000;
const duaribu = 2000;
const limaribu = 5000;
const sepuluhribu = 10000;
const limapuluhribu = 50000;

var kembalian1 = 0;
var kembalian2 = 0;
var kembalian5 = 0;
var kembalian10 = 0;
var kembalian50 = 0;

var pecahan = {
    1000: "0",
    2000: "0",
    5000: "0",
    10000: "0",
    50000: "0"
};



function cariUangKembalian(total_pembelian, uang){
    let kembalian = uang - total_pembelian;
    while (kembalian > 0) {
        if (kembalian>=limapuluhribu ){
            kembalian = kembalian - limapuluhribu;
            kembalian50++;
        } else if (sepuluhribu<=kembalian && kembalian<limapuluhribu){
            kembalian = kembalian - sepuluhribu;
            kembalian10++;
        } else if (limaribu<=kembalian && kembalian<sepuluhribu){
            kembalian = kembalian - limaribu;
            kembalian5++;
        } else if (duaribu<=kembalian && kembalian<limaribu){
            kembalian = kembalian - duaribu;
            kembalian2++;
        } else if (seribu<=kembalian && kembalian<duaribu){
            kembalian = kembalian - seribu;
            kembalian1++;
        } else {
            break;
        }
    };
    pecahan[1000] = kembalian1;
    pecahan[2000] = kembalian2;
    pecahan[5000] = kembalian5;
    pecahan[10000] = kembalian10;
    pecahan[50000] = kembalian50;
    return pecahan;
};

console.log("Welcome to calculator uang kembalian");
let total_pembelian = prompt("Masukkan total pembelian:");
let uang = prompt("Jumlah yang dibayarkan: ");
console.log("Pecahan uang kembalian adalah sebagai berikut:");
console.log(cariUangKembalian(total_pembelian,uang));