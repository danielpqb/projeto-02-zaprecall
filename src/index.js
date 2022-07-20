import ReactDOM from "react-dom"
import App from './components/App'

import Screen01 from "./components/Screen01"

ReactDOM.render(<App screen={<Screen01 />} />, document.querySelector('.root'))

/*<ion-icon name="checkmark-circle"></ion-icon>
<ion-icon name="close-circle"></ion-icon>
<ion-icon name="help-circle"></ion-icon>*/