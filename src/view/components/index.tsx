import Toolbar from './toolbar';

import './index.scss';

export default function App(): JSX.Element {
  return (
    <>
      <Toolbar />
      <div id="workspace"></div>
    </>
  );
}

// -------------------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import WasmTest from '@/components/wasm';

ReactDOM.render(
  <React.StrictMode>
    <App></App>
    <WasmTest />
  </React.StrictMode>,
  document.getElementById('root'),
);
