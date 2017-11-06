Yeni obje eklemeleri /* ES6 ile gelen objeler ve obje içerisindeki fonksiyonlar çok değişti. */

var degisken1 = “Bu ilk degisken”; var degisken2 = “Bu ikinci degisken”;

/* Eski hali : */ var obje = { sec1 : degisken1, sec2 : degisken2, dayanc: function(param){ console.log(param); } };

console.log(obje.dayanc(“Merhaba”));

/* Yeni hali : */

var obje = { degisken1, degisken2,

dayanc(param){ console.log(param); } } console.log(obje.dayanc(“Merhaba”));

/* Aralarındaki farklar : */

//Eski halinde obje içerisinde : kullanarak değişken belirtmemiz gerekiyordu. //Obje içerisinde fonksiyonlara isim: function() diye başlamamız gerekiyordu.

// Yeni halinde sadece degiskenleri yazıp virgül ile ayırdık. // Fonksiyonları kısaltılmış şekilde yazdık.
