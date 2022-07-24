function hello() {
    console.log("Hello");
}

// hello();
// hello();
// hello();


// Fonksiyonlara parametre gönderme

// Default parametreyi eşitleyerek kaydedebiliriz
const canboz = function (ad = "Can",soyad = "Boz") {
    console.log(`Ad Soyad ${ad} ${soyad}`)
}

canboz('Kemal', 'Doğukan');
canboz();


//Eski Tipten arrow'a hafif geçiş
const kareAlani = function (kenar) {
    return kenar*kenar;
}

let sonuc = kareAlani(6);
console.log(sonuc);

//Arrow İlk Versiyon
// const karealanim = (kenar) => {
//     return kenar**2;
// }

//Tek Parametre ise
// const karealanim = kenar => {
//     return kenar**2;
// }


//Tek Satır ile return varsa
const karealanim = kenar => kenar**2;
console.log(karealanim(7));


// const donus = () => {
//     return "Burak";
// }

const stringDonus = () => "Burak"
console.log(stringDonus());


// UYGULAMA
// Ürünlerin ham fiyatını verip vergili halinin toplamını bulan hesaplama

const urunSatis = function (urunler, vergi) {
    let toplam = 0;
    for (let i = 0; i<urunler.length; i++) {
        toplam += urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}
console.log(urunSatis([10,20,30], 0.25));


// Arrow hali
const urunSatisArrow = (urunler, vergi) => {
    let toplam = 0;
    for (let i = 0; i<urunler.length; i++) {
        toplam += urunler[i] + urunler[i]*vergi;
    }
    return toplam;
}

console.log(urunSatisArrow([10,20,30], 0.25));
