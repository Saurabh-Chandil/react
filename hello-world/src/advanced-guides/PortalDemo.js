import React from 'react';
import ReactDOM  from 'react-dom';

function PortalDemo() {
  return ReactDOM.createPortal(
    <p>
        <h1>Portal Component</h1>
    </p>, document.getElementById('portal-root')
  ) 
}

export default PortalDemo;
