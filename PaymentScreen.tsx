import React from 'react';
import {CFJSWebView} from './src/index'

const PaymentScreen: React.FC = ({ }) => {
    return (
        <CFJSWebView
        paymentInfo={
          {
            paymentSessionId : "session_cBXbIzPlZco_XIl4n8MQxS0dNT_smQ6SfvN00vtYB4d7OL9ta5NSKBDaaa0V3F6gvhejqU6TQWVYx0lG29nZXXmtsjCoe-a4I6O2kQh1fBvnPA3lMqQzdW8payment",
            env: 'sandbox'
          }
        } 
        style={{ flex: 1 }} />
      );
};
  
export default PaymentScreen;