import React from 'react';
import { findNodeHandle, Platform } from 'react-native';
import WebView from 'react-native-webview';
import {addJsBridge } from 'react-native-js-bridge';

const WebsitePaymentScreen: React.FC = ({ }) => {

  const checkandAddJsBridge = (tag: number) => {
    const nativeTag = findNodeHandle(tag);
    if (nativeTag) {addJsBridge(nativeTag);}
  };

  return (
    <WebView
    source={{uri: 'https://discoverpilgrim.com/'}}
    onLoadStart={({ nativeEvent }) => {
      if (
        nativeEvent.url &&
        nativeEvent.url.includes('api.cashfree.com') &&
        Platform.OS === 'android'
      ) {
        console.log('onLoadStart', nativeEvent.url);
        checkandAddJsBridge(nativeEvent?.target);
      }
    }}
    />
    );
};
  
export default WebsitePaymentScreen;