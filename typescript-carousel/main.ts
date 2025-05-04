const $images = document.querySelectorAll('.image');
if (!$images) throw new Error('cannot find images');
console.log($images[0]);
