function calculateFuelCost() {
    const price = parseFloat(document.getElementById('price').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const consumption = parseFloat(document.getElementById('consumption').value);

    if (isNaN(price) || isNaN(distance) || isNaN(consumption)) {
        document.getElementById('result').textContent = 'Proszę wprowadzić wszystkie wartości.';
        return;
    }

    const fuelUsed = ((consumption / 100) * distance).toFixed(3);
    const totalCost = fuelUsed * price;

    document.getElementById('result').textContent = `Koszt paliwa (${fuelUsed} l): ${totalCost.toFixed(2)} zł`;
}