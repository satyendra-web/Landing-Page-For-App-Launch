import React from 'react';
import Feature from './Components/Feature';
import Header from './Components/Header';
import About from './Components/About';
import Presentation from './Components/Presentation';

import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './Components/Contact';




function App() {
  return (
    <div className="App">
      <Header/>
    <Feature/>
    <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App'/>
    <Presentation/>
    <About image={aboutimage} title='Download And Get The App Now' button='Download'/>
<Contact/>
    </div>
  );
}

export default App;
