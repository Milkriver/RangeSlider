const slider = document.getElementById('priceRange');
const price = document.getElementById('dollars');
price.innerHTML = (slider.value/100).toFixed(2);
slider.oninput = function () {
  price.innerHTML = (this.value/100).toFixed(2);
}
