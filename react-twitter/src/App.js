// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import React from 'react';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

import './App.css';



const App = () => {
  return (
    <div className="App">
    
    {/* Sidebar */}
    <Sidebar/>

     {/* Feed */}
     <Feed />
    
      {/* Widgets */}
      <Widgets />
    </div>
  );


}

export default App;
