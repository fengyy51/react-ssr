import Demo from './main'
import ReactDOM from 'react-dom'
import React from 'react'
// function renderApp() {
//   ReactDOM.hydrate(
//     <Demo />,
//     document.getElementById('root'),
//   );
// }
ReactDOM.render(<Demo />, document.getElementById('root'))
// window.onload = () => {
//   renderApp();
// };