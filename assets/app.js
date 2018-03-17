self.addEventListener('canmnakepayment', (evt) => {
    evt.respondWith(true);
  });
  
  self.addEventListener('paymentrequest', (evt) => {
      evt.respondWith({
          methodName: 'https://192.168.43.223:8443/',
          details: {
              token: '1234567890',
          },
      });
  });