let yaricap=15;
const piSayisi = 3.14;

let daireAlan = piSayisi * yaricap**2;
console.log(daireAlan);

let kalan = yaricap % 4;
console.log(kalan);

let sonuc = 6 * (15-4)**2;
console.log(sonuc);

//Sayı artırma
let sayi = 13;
// sayi = sayi +1;
// sayi++;
// ++sayi;

// ++sayi ve sayi++ farkı
let sayim = sayi++;
console.log("Sayim",sayim);

let sayimYeni = ++sayi;
console.log("Sayim Yeni", sayimYeni)

console.log(sayi);


//NaN kullanımı
console.log(15/4);
console.log(15/"Can");
console.log(15*"Can");

let birlestirme = "Dersi " + sayi + " kere tekrar ettim";
console.log(birlestirme);