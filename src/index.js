import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';
import App from "./App";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)


// This is no longer supporter on React 18
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );