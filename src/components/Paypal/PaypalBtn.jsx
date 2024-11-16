
import React, { useEffect, useRef, useState } from 'react';
import { conf } from '../../conf/conf';

function PaypalBtn({ amount }) {
  const paypalRef = useRef();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const loadPaypalScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${conf.paypalClientId}&components=buttons`;
      script.async = true;
      script.onload = () => resolve(script);
      script.onerror = (err) => reject(new Error('PayPal SDK failed to load: ' + err));
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadPaypalScript()
      .then(() => {
        setIsScriptLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      const script = document.querySelector(`script[src^="https://www.paypal.com/sdk/js"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.paypal && paypalRef.current) {
      if (!paypalRef.current.hasChildNodes()) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            alert('Donation successful! Thank you for your contribution');
          },
          onError: (err) => {
            console.error('PayPal Button Error:', err);
          },
        }).render(paypalRef.current);
      }
    }
  }, [isScriptLoaded, amount]);

  return <div ref={paypalRef}></div>;
}

export default PaypalBtn;
