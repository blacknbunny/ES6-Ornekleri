Template String’leri

/* ES6’da gelen ve bizi çok rahatlatan bir diğer özellik ise `` tırnakları */

/* Eskiden ekrana yazılar ile degisken yazdırmak isteseydik */
function dayanc(isim=”Dayanç”, sifre=”dayanc123”){
  console.log(“Benim ismim “ + isim + “ şifrem ise “ + sifre);
}

/* Şimdi yazdırmak istesek */

function dayanc(isim=”Dayanç”, sifre=”dayanc123”){
  console.log(Benim ismim ${isim} şifrem ise ${sifre});
}

/* Artık `` tırnakları ile yazılara boşluk bırakma + işareti koyup ekleme zahmeti bitti. */
