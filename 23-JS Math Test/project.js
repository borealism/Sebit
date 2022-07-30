let formDOM = document.querySelector(".question-form");
let btnDOM = document.querySelector(".btn");
let divP = document.querySelector("#divP"); //"Bravo" ekleyeceğim div için divP ID'si verdim
let p = document.createElement("p");
p.innerHTML = "Bravo! You can pass through the next exercise group";

//btn class'lı elemente, HTML dosyasında "button" type'ı eklemiştim.
btnDOM.onclick = () => {
  let cevaplar = [
    formDOM.q1.value,
    formDOM.q2.value,
    formDOM.q3.value,
    formDOM.q4.value,
  ];

  let count = 0;

  for (let i = 0; i < cevaplar.length; i++) {
    if (cevaplar[i] == "T") {
      count++;
    }
  }

  let yuzde = document.querySelector("#percentage");
  yuzde.innerHTML = 100 * (count / 4) + "%";

  let resultDOM = document.querySelector(".result");
  resultDOM.classList.remove("d-none");

  if (yuzde.innerHTML === "100%") {
    divP.append(p);
    btnDOM.disabled = true;
  }
};
