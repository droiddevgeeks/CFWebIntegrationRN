import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

const WebsiteDefaultUpiPaymentScreen: React.FC = ({ }) => {
  
  const checkIsUPIIntentLink = (link: string)=>{
    if(link != undefined && 
         (link.startsWith("upi://pay")
         || link.startsWith("tez://")|| link.startsWith("gpay://")
         || link.startsWith("paytmmp://")
         || link.startsWith("phonepe://"))
    ){
      return true
    }
    return false
  }
    return (
        <WebView
        source={{ uri: 'https://www.cashfree.com/devstudio/preview/pg/web/checkout#renderCheckout' }}
        style={{ flex: 1 }} 
        onShouldStartLoadWithRequest={event => {
          console.log("Current URL Loading", event.url)
          if(checkIsUPIIntentLink(event.url)) {
          Linking.canOpenURL(event.url).then(supported => {
                  if (supported) {
                        Linking.openURL(event.url);
                  }else{
                      console.log("Not able to open")
                  }
                });
                return false;
          }
        return true;
        }}
        />
      );
};
  
export default WebsiteDefaultUpiPaymentScreen;