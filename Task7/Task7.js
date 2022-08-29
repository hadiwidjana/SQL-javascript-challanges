var prompt = require('prompt-sync')();

var hargaSaham = [];

//user input harga saham
hargaSaham.push(prompt('Harga saham hari pertama:'));
hargaSaham.push(prompt('Harga saham hari kedua:'));
hargaSaham.push(prompt('Harga saham hari ketiga:'));
hargaSaham.push(prompt('Harga saham hari keempat:'));
hargaSaham.push(prompt('Harga saham hari kelima:'));

console.log(hargaSaham);

var highestProfit = 0;
var todayProfit = 0;

function findHighestProfit(hargaSaham){
    for (let i = 0; i<hargaSaham.length; i++){
        for (let j=i+1; j<hargaSaham.length; j++){
            todayProfit = hargaSaham[j]-hargaSaham[i];
            if (todayProfit>highestProfit) highestProfit = todayProfit;
        }
    }

    if (highestProfit<=0){
        return "Tidak bisa mendapatkan profit pada hari-hari ini";
    } else{
        return highestProfit;
    }
}

console.log("Potensi keuntungan terbesar adalah: ")
console.log(findHighestProfit(hargaSaham));
