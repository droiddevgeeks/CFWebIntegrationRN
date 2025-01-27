import {HostComponent, requireNativeComponent, ViewProps} from 'react-native';
import React  from 'react';
import { WebView, WebViewProps } from 'react-native-webview';
import { NativeProps } from 'react-native-webview/lib/RNCWebViewNativeComponent';
const CFCustomWebView = requireNativeComponent('CFRNWebViewManager');
class CFWebView extends React.Component<WebViewProps> {
  render() {
    return (
      <WebView 
      {...this.props}
      nativeConfig ={{
        component: CFCustomWebView as unknown as HostComponent<NativeProps>,
      }}
      />
    );
  }
}

interface CFWebViewProps extends ViewProps {
  paymentInfo?: object;
}

const  CFJSWebView = requireNativeComponent<CFWebViewProps>('CFWebViewModule');
export { CFWebView , CFJSWebView };