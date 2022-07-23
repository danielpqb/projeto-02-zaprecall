import ReactDOM from "react-dom"
import App from './components/App'

import Screen01 from "./components/Screen01/Screen01"

ReactDOM.render(<App screen={<Screen01 />} />, document.querySelector('.root'))