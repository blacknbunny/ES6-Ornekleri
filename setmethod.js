Set methodu

/* Değişkenler için kullanışlı yeni metodlar. */

/* .repeat() : Belirtilen değişkeni belirtilen sayı kadar tekrar eder.*/ 
var degisken = “Dayanç”; 
console.log(degisken.repeat(5));

/* .startsWith() : Değişken içeriğinin ne ile başladığı test edilir.*/
var degisken = “Dayanç”;
if(degisken.startsWith(“Day”)){
  console.log(“Değişken Day ile başlıyor.”);
}

/* .endsWith() : Değişke içeriğinin ne ile bittiği test edilir. */

var degisken = “Dayanç”;
if(degisken.endsWith(“anç”)){
  console.log(“Değişken anç ile bitiyor.”);
}

.endsWith() fonksiyonunun bir özelliği daha var kaç harfi baz alacağını belirtebiliyoruz
if(degisken.endsWith(“ay”, 3)){
  /* Ilk üç harfi baz alarak karşılaştırma yapar */
}

/* .includes() : Değişkenin içinde belirtilen girdi varmı test edilir. */
var bbn = “Dayanç Soyadlı”;
if(degisken.includes(‘Soyadlı’)){
  console.log(“bbn Değişkeni Soyadlı kelimesini barındırıyor.”);
}
