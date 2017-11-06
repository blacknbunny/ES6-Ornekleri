# ecmascript6-ornekleri

Const değişkeni

/* Const değişken türü bulunduğu kod bloğu içerisinde asla değiştirlemez. */

const degisken = “Bu bir degisken”;

/* Farklı bir kod bloğu arasına alırsak aynı değişken ismini iki farklı şekilde kullanabiliriz */

/* Örnek : */ function bubirfonksiyon(){ const degisken = “Bu bir ikinci degisken”; }

/* Yukarıdaki değişkenle aynı isimi aldılar fakat farklı kod bloğunda oldukları için aynı sayılmayacaklar. */

***

Let değişkeni

/* Let değişken türü sadece bulunduğu kod bloğu içerisinde değiştirilebilir. */

let degisken = “Bu bir degisken”;

/* Örnek : */

for(let i = 0;i < 5;i++){ /* let i değişkeni bloğunda çalıştı ve bitti artık burada yeni atama yapabiliriz i değişkeni üzerine. */ let i = “yeni”; }

/* Yukarıdaki örnekte let i değişkeni ilk döngü bloğunda kullanılmış ve yeni bir atama yapılabilir hale gelmiştir. */

***

Fonksiyon parametreleri

/* ES6 ile gelen bir sürü özellik arasında en çok ilgimi çeken bu oldu. */

function dayanc(isim=”dayanç”, sifre=”dayanc123”){

}

/* İsim ve Şifre parametresine yapılan atamalar eğer öyle bir parametre girilmez ise belirlediğimizi ata demek oluyor. */

***

Array operatorü

/* Artık arraylarda tek tek çağırmak yerine hepsini birden çağırma özelliği var. */

var array = [‘Ham1’, ‘Ham2’, ‘Ham3’];

/* Aşşağıdaki örnek ile array içerisindeki tüm verileri alabiliyoruz. */

console.log(…array);

***

Template String’leri

/* ES6’da gelen ve bizi çok rahatlatan bir diğer özellik ise `` tırnakları */

/* Eskiden ekrana yazılar ile degisken yazdırmak isteseydik */ function dayanc(isim=”Dayanç”, sifre=”dayanc123”){ console.log(“Benim ismim “ + isim + “ şifrem ise “ + sifre), }

/* Şimdi yazdırmak istesek */

function dayanc(isim=”Dayanç”, sifre=”dayanc123”){ console.log(Benim ismim ${isim} şifrem ise ${sifre}); }

/* Artık `` tırnakları ile yazılara boşluk bırakma + işareti koyup ekleme zahmeti bitti. */

***

# Yeni obje eklemeleri /* ES6 ile gelen objeler ve obje içerisindeki fonksiyonlar çok değişti. */

var degisken1 = “Bu ilk degisken”; var degisken2 = “Bu ikinci degisken”;

/* Eski hali : */ var obje = { sec1 : degisken1, sec2 : degisken2, dayanc: function(param){ console.log(param); } };

console.log(obje.dayanc(“Merhaba”));

/* Yeni hali : */

var obje = { degisken1, degisken2,

dayanc(param){
	console.log(param);
} }
console.log(obje.dayanc(“Merhaba”));

/* Aralarındaki farklar : */

//Eski halinde obje içerisinde : kullanarak değişken belirtmemiz gerekiyordu. //Obje içerisinde fonksiyonlara isim: function() diye başlamamız gerekiyordu.

// Yeni halinde sadece degiskenleri yazıp virgül ile ayırdık. // Fonksiyonları kısaltılmış şekilde yazdık.

***

Yeni fonksiyonlar

/* Fonksiyonları artık daha kısa şekilde yazabiliyoruz ES6 ile. */

/* Eski fonksiyon hali : */

var fonksiyon = function(param){ console.log(Merhaba ${param}); } fonksiyon(“Dayanç”);

/* Yeni fonksiyon hali */

var fonksiyon = (param) => { console.log(‘Merhaba ${param}’); } fonksiyon(“Dayanç”);

/* Farkları : */

/* Eskiden fonksiyon oluşturmak istediğimizde ya var degisken = function() yada function isim() olarak yazmamız gerekiyordu. */

/* Yeni fonksiyonda ise var degisken = () => ile kısaltılmış şekilde fonksiyonu yazabiliyoruz */

***

Yeni değişken metodları

/* Değişkenler için kullanışlı yeni metodlar. */

/* .repeat() : Belirtilen değişkeni belirtilen sayı kadar tekrar eder.*/ var degisken = “Dayanç”; console.log(degisken.repeat(5));

/* .startsWith() : Değişken içeriğinin ne ile başladığı test edilir.*/ var degisken = “Dayanç”; if(degisken.startsWith(“Day”)){ console.log(“Değişken Day ile başlıyor.”); }

/* .endsWith() : Değişke içeriğinin ne ile bittiği test edilir. / var degisken = “Dayanç”; if(degisken.endsWith(“anç”)){ console.log(“Değişken anç ile bitiyor.”); } / .endsWith() fonksiyonunun bir özelliği daha var kaç harfi baz alacağını belirtebiliyoruz / if(degisken.endsWith(“ay”, 3)){ / Ilk üç harfi baz alarak karşılaştırma yapar */ }

/* .includes() : Değişkenin içinde belirtilen girdi varmı test edilir. */ var bbn = “Dayanç Soyadlı”; if(degisken.includes(‘Soyadlı’)){ console.log(“bbn Değişkeni Soyadlı kelimesini barındırıyor.”); }

***

Set methodu

/* Değişkenler için kullanışlı yeni metodlar. */

/* .repeat() : Belirtilen değişkeni belirtilen sayı kadar tekrar eder.*/ var degisken = “Dayanç”; console.log(degisken.repeat(5));

/* .startsWith() : Değişken içeriğinin ne ile başladığı test edilir.*/ var degisken = “Dayanç”; if(degisken.startsWith(“Day”)){ console.log(“Değişken Day ile başlıyor.”); }

/* .endsWith() : Değişke içeriğinin ne ile bittiği test edilir. / var degisken = “Dayanç”; if(degisken.endsWith(“anç”)){ console.log(“Değişken anç ile bitiyor.”); } / .endsWith() fonksiyonunun bir özelliği daha var kaç harfi baz alacağını belirtebiliyoruz / if(degisken.endsWith(“ay”, 3)){ / Ilk üç harfi baz alarak karşılaştırma yapar */ }

/* .includes() : Değişkenin içinde belirtilen girdi varmı test edilir. */ var bbn = “Dayanç Soyadlı”; if(degisken.includes(‘Soyadlı’)){ console.log(“bbn Değişkeni Soyadlı kelimesini barındırıyor.”); }

