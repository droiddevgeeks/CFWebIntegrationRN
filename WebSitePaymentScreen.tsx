import React from 'react';
import { CFWebView } from './src/index';

const WebsitePaymentScreen: React.FC = ({ }) => {
  
  return (
    <CFWebView 
    source={{uri: 'https://discoverpilgrim.com/'}}
    />
    );
};
  
export default WebsitePaymentScreen;