import React from 'react';
import { findNodeHandle, Platform } from 'react-native';
import WebView from 'react-native-webview';
import { addJsBridge } from 'react-native-js-bridge';
const WebsitePaymentScreen = ({}) => {
    const checkandAddJsBridge = (tag) => {
        const nativeTag = findNodeHandle(tag);
        if (nativeTag) {
            addJsBridge(nativeTag);
        }
    };
    return (React.createElement(WebView, { source: { uri: 'https://discoverpilgrim.com/' }, onLoadStart: ({ nativeEvent }) => {
            if (nativeEvent.url &&
                nativeEvent.url.includes('api.cashfree.com') &&
                Platform.OS === 'android') {
                console.log('onLoadStart', nativeEvent.url);
                checkandAddJsBridge(nativeEvent?.target);
            }
        } }));
};
export default WebsitePaymentScreen;
