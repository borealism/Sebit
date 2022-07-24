let email="tuncalburak@gmail.com";
console.log(email);


//Birleştirme

let ad="Zekeriya";
let soyad="Duranel HHHH";
let adSoyad = ad + " " + soyad
console.log(adSoyad);
console.log(adSoyad[0]);

//Kaç karakter
console.log(adSoyad.length);

//String metodları
console.log(adSoyad.toUpperCase());
let kucukAdSoyad=adSoyad.toLowerCase();
console.log(kucukAdSoyad);

//Kaçıncı indexte bulunduğu
let index = adSoyad.indexOf('a');
let indexLast=adSoyad.lastIndexOf('a');
console.log(index);
console.log(indexLast);

//Slice kullanımı
let ilkIsım = adSoyad.slice(0,8);
console.log(ilkIsım);

//Replace kullanımı
let yerdegistir = adSoyad.replace(" ","");
console.log(yerdegistir);

//ReplaceAll
let yerdegistirAll = adSoyad.replaceAll(" ", "");
console.log(yerdegistirAll);