import './App.css';
// import '../public/css/'
import Login from './component/Login';
import { BrowserRouter as Router, Route, Redirect, Link, history,Switch } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
     
  
  );
}

export default App;
