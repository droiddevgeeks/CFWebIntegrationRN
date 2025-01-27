import { requireNativeComponent } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
const CFCustomWebView = requireNativeComponent('CFRNWebViewManager');
class CFWebView extends React.Component {
    render() {
        return (React.createElement(WebView, { ...this.props, nativeConfig: {
                component: CFCustomWebView,
            } }));
    }
}
const CFJSWebView = requireNativeComponent('CFWebViewModule');
export { CFWebView, CFJSWebView };
