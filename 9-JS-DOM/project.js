// const button = document.querySelector('button'); İlk seçme yöntemi
// const button = document.querySelector('#buttonId'); İkinci yöntem
// const button = document.querySelector(".buttonClass"); Üçüncü yöntem
const button = document.getElementById("buttonId"); 
// const button = document.getElementsByClassName("buttonClass")[0]; Beşinci yöntem



//TETİKLEME 

// İlk Yöntem
// button.addEventListener('click', () => {
//     console.log("Tıklandı");
// })

console.log(button);


//İkinci Yöntem
function add() {
    console.log("Tıklandı");
}

const liElemenlari = document.querySelectorAll('li');
console.log(liElemenlari);

liElemenlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // console.log("Tıklandı");
        // console.log(e);
        // console.log(e.target);
        e.target.style.color = "blue";
    })
})

const ulDegerlerim = document.querySelector('ul');
// console.log(ulDegerlerim);
// ulDegerlerim.remove();


//Tıklandığında elemanı kaldır
liElemenlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        e.target.remove();
    })
})


const liElemanim = document.createElement('li');
liElemanim.textContent = 'JavaScript';

// append Sona Eleman ekler
// prepend // Başa Eleman ekler

//STEP 1

//UL etiketini seç
//li oluşturduk zaten

//butona tıkladığımda bu Lİ elemanını ekle

//Sona Ekle
button.addEventListener('click', () => {
    ulDegerlerim.append(liElemanim);
})

//Başa Ekle
// button.addEventListener('click', () => {
//     ulDegerlerim.prepend(liElemanim);
// })
