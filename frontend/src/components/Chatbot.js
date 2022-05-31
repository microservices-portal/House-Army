import React, { Component } from 'react'

export default class Chat extends Component {
   componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"791bcb9784c9bf57bf429be627e7a79a","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
   }
  render() {
    return (
      <div>Chat</div>
    )
  }
}