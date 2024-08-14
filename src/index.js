import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
function Mydemo(){
  return(
  <div>
    <Header/>
    <Footer/>
    <Content/>
  </div>
  );
}

ReactDOM.render(<Mydemo/>,document.getElementById("root"));