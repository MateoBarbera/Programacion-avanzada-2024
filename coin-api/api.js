const apiKey = '9440883B-DD44-4C82-AA29-2E0668668E74';

fetch(`https://rest.coinapi.io/v1/exchanges?apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const first16Exchanges = data.slice(0, 16);

    first16Exchanges.forEach(exchange => {
      const exchangeContainer = document.createElement('div');
      exchangeContainer.className = 'exchange-container';

      const exchangeName = document.createElement('p');
      exchangeName.textContent = `Name: ${exchange.name}`;
      exchangeContainer.appendChild(exchangeName);

      const exchangeVolume1hr = document.createElement('p');
      exchangeVolume1hr.textContent = `Volume 1hr: ${exchange.volume_1hrs_usd}`;
      exchangeContainer.appendChild(exchangeVolume1hr);

      const exchangeVolume1day = document.createElement('p');
      exchangeVolume1day.textContent = `Volume 1day: ${exchange.volume_1day_usd}`;
      exchangeContainer.appendChild(exchangeVolume1day);

     

      document.body.appendChild(exchangeContainer);
    });
  })
  .catch(error => console.error('Error:', error));