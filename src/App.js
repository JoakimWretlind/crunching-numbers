import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/StartPage/Home'
import Calulator from './pages/Calculator/Calculator'
import CryptoCurrencies from './pages/Crypto/CryptoCurrencies'
import CryptoOverview from './pages/Crypto/CryptoOverview/CryptoOverview'
import CryptoPersonal from './pages/Crypto/CryptoPersonal/CryptoPersonal'
import Emi from './pages/Emi/EmiCalculator'
import Savings from './pages/Savings/Savings'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Calculator/Calculator" exact component={Calulator} />
        <Route path="/Crypto/CryptoCurrencies" exact component={CryptoCurrencies} />
        <Route path="/Crypto/CryptoOverview/CryptoOverview" exact component={CryptoOverview} />
        <Route path="/Crypto/CryptoPersonal/CryptoPersonal" exact component={CryptoPersonal} />
        <Route path="/Emi/EmiCalculator" exact component={Emi} />
        <Route path="/Savings/Savings" exact component={Savings} />
        <Route path="/Contact/Contact" exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;


// blue: #000024
// turqoise: #3894B2