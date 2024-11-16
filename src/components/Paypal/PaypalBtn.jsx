
import React, { useEffect, useRef, useState } from 'react';
import { conf } from '../../conf/conf';

function PaypalBtn({ amount }) {
  const paypalRef = useRef();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [paypalButtonRendered, setPaypalButtonRendered] = useState(false); 

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${conf.paypalClientId}&components=buttons`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsScriptLoaded(true);
    };

    script.onerror = (err) => {
      console.error('PayPal SDK failed to load', err);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded && window.paypal && paypalRef.current && !paypalButtonRendered) {
      window.paypal.Buttons({
        createOrder: function (data, actions) {
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
        onApprove: function (data, actions) {
          alert('Donation successful! Thank you for your contribution');
        },
        onError: function (err) {
          console.error('PayPal Button Error:', err);
        },
      }).render(paypalRef.current);

      setPaypalButtonRendered(true);
    }
  }, [isScriptLoaded, amount, paypalButtonRendered]);

  return <div ref={paypalRef}></div>;
}

export default PaypalBtn;
