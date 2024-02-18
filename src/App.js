import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Prints from './routes/Prints';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';
import EventPhotography from './routes/EventPhotography';
import Landscape from './routes/Landscape';
import Editorial from './routes/Editorial'
function App() {
  return (
    <body>
      <Routes>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/portfolio" element = {<Portfolio/>}/>
        <Route path = "/prints" element= {<Prints/>}/>
        <Route path = "/contact" element= {<Contact/>} />
        <Route path = "/event-photography" element= {<EventPhotography/>}/>
        <Route path = "/landscape-photography" element= {<Landscape/>}/>
        <Route path = "/editorial-photography" element= {<Editorial/>}/>
        
      </Routes>
    </body>
  );
}

export default App;
