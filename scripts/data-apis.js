//Api dolar
fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dolar').innerHTML = `
            <h2>Cotización del Dolar Blue </h2>
            <p>Valor de Compra: ${data.blue.value_buy} Pesos Argentinos</p>
            <p>Valor de Venta: ${data.blue.value_sell} Pesos  Argentinos</p>
        `;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
//Api clima
fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&units=metric&appid=3d019d71f0a3b6c65c04d3f6379d94b8')
    .then(response => response.json())
    .then(data => {
        document.getElementById('clima').innerHTML = `
            <h1>Clima en Buenos Aires, Argentina</h1>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Humedad: ${data.main.humidity}%</p>
        `;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

//Api euro
fetch('https://v6.exchangerate-api.com/v6/7104c4eeee8319998cfe6c8f/latest/USD')
    .then(response => response.json())
    .then(data => {
        const usdToEur = data.conversion_rates.EUR;
        const usdToArs = data.conversion_rates.ARS;
        const eurToArs = usdToArs / usdToEur;
        const eurToArsVenta = eurToArs * 1.02;

        document.getElementById('euro').innerHTML = `
            <h1>Cotización del Euro Oficial</h1>
            <p>Valor de Compra = ${eurToArs.toFixed(2)} Pesos Argentinos</p>
            <p>Valor de Venta = ${eurToArsVenta.toFixed(2)} Pesos Argentinos</p>

        `;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
