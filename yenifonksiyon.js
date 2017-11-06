Yeni fonksiyonlar

/* Fonksiyonları artık daha kısa şekilde yazabiliyoruz ES6 ile. */

/* Eski fonksiyon hali : */

var fonksiyon = function(param){ console.log(Merhaba ${param}); } fonksiyon(“Dayanç”);

/* Yeni fonksiyon hali */

var fonksiyon = (param) => { console.log(‘Merhaba ${param}’); } fonksiyon(“Dayanç”);

/* Farkları : */

/* Eskiden fonksiyon oluşturmak istediğimizde ya var degisken = function() yada function isim() olarak yazmamız gerekiyordu. */

/* Yeni fonksiyonda ise var degisken = () => ile kısaltılmış şekilde fonksiyonu yazabiliyoruz */
