document.getElementById('btnProduct').onclick = function() {
  calcCost();
}

function calcCost() {
  let sP = document.getElementById('selectProduct').value;
  let sQ = document.getElementById('quantityProduct').value;
  let total = sP * sQ;
  document.getElementById('priceProduct').innerHTML = total;

  document.getElementById('infoProduct').style.display = 'block';

  if (sP == 0 || sQ == 0) {
    document.getElementById('infoProduct').style.display = 'none';
    alert('Please select');
    return;
  }
}