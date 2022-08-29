const transactions = [
    { id: 1, totalPrice: 652000, day: "senin"},
    { id: 2, totalPrice: 245000, day: "selasa"},
    { id: 3, totalPrice: 214000, day: "rabu"},
    { id: 4, totalPrice: 664000, day: "kamis"},
    { id: 5, totalPrice: 144000, day: "minggu"},
    { id: 6, totalPrice: 422000, day: "sabtu"},
    { id: 7, totalPrice: 263000, day: "minggu"},
    { id: 8, totalPrice: 655000, day: "rabu"},
    { id: 9, totalPrice: 426000, day: "selasa"},
    { id: 10, totalPrice: 512000, day: "kamis"},
];

var totalSenin = 0;
var totalSelasa = 0;
var totalRabu = 0;
var totalKamis = 0;
var totalJumat = 0;
var totalSabtu = 0;
var totalMinggu = 0;

function rekapTransaksi (transactions){
    for(let i = 0; i<transactions.length; i++){
        switch(transactions[i].day){
            case "senin":
                totalSenin = totalSenin + transactions[i].totalPrice;
                break;
            case "selasa":
                totalSelasa = totalSelasa + transactions[i].totalPrice;
                break;
            case "rabu":
                totalRabu = totalRabu + transactions[i].totalPrice;
                break;
            case "kamis":
                totalKamis = totalKamis + transactions[i].totalPrice;
                break;
            case "jumat":
                totalJumat = totalJumat + transactions[i].totalPrice;
                break;
            case "sabtu":
                totalSabtu = totalSabtu + transactions[i].totalPrice;
                break;
            case "minggu":
                totalMinggu = totalMinggu + transactions[i].totalPrice;
                break;
        }

    }
    let totalRekap = [
        { hari: "senin", total: totalSenin },
        { hari: "selasa", total: totalSelasa },
        { hari: "rabu", total: totalRabu },
        { hari: "kamis", total: totalKamis },
        { hari: "jumat", total: totalJumat },
        { hari: "sabtu", total: totalSabtu },
        { hari: "minggu", total: totalMinggu },
    ]

    return totalRekap;
}

console.log('berikut rekapitulasi total transaksi per hari:');
console.log(rekapTransaksi(transactions));