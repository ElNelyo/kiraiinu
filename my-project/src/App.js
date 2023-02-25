import logo from './images/logo.png';
import './App.css';
import Navbar from './components/Nav';
import backgroundParachute from './images/background_parachute.png';
import inu from './images/inu.png';
import badge from './images/badge.png';
import parachute from './images/parachute.png';
import main from './images/main.png';
import { ReactComponent as Twitter }from './images/twitter.svg';
import { ReactComponent as Medium }from './images/medium.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <div className="h-8  bg-gradient-to-r from-purple-medium to-indigo-400 w-full"></div>
      <div className="w-full h-84 bg-black">
        <img className="w-48 ml-20 pt-8" src={badge}/>
        <img className="w-32 top-12 right-1/3 hidden md:block md:absolute" src={parachute}/>
        <img className="w-48 bottom-0 mt-12 left-12 absolute" src={parachute}/>

        <div className="w-full flex flex-col md:flex-row ml-2 md:ml-0">
        <div>
          <div className="text-white md:ml-48 mt-12 text-8xl font-bold tilt">Kirai Inu</div>
          <div className="text-white md:ml-48 mt-8 text-xl font-bold tilt">The best memecoin coming</div>
          <div className="text-white md:ml-48 text-xl font-bold tilt">soon on arbitrum</div>
          <div className="text-white md:ml-48 text-xl font-bold tilt">Don't miss it !</div>
        </div>
        <img className="w-full md:w-96 md:ml-32" src={main}/>

        </div>
        <img className="w-full" src={backgroundParachute}></img>
      </div>
  
      <div className="w-full pt-12 flex flex-col md:flex-row bg-purple-low justify-around ">
    
            <div>
              <img src={inu} className="h-34 w-full md:h-48 bg-purple-low "></img>

            </div>
            <div className="h-8  blcok md:hidden mb-8 bg-gradient-to-r from-purple-medium to-indigo-400 w-full"></div>

            <div className={"flex flex-col hidden md:block"}>
            <div className="tilt font-bold text-purple-extra-hard text-4xl">If you have any questions</div>
            <div className="tilt font-bold text-purple-extra-hard text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
              <div className="flex flex-row md:flex-col md:space-y-4 mb-8 md:mb-0 justify-around">
                  <div className="h-14 w-14 bg-gradient-to-r from-purple-medium to-indigo-400 rounded-lg">
                    <a href="https://twitter.com/kiraiinu">
                    <Twitter className="ml-1 pt-3 w-12 h-12 text-white" fill={"white"}/>
                    </a>
                  </div>
                  <div className="h-14 w-14 bg-gradient-to-r from-purple-medium  to-indigo-400 rounded-lg">
                    <a href="https://medium.com/@kiraiinu.token">
                      <Medium className="ml-1 pt-3 w-12 h-12 text-white" fill={"white"}/>
                    </a>
                  </div>
              </div>
  
          
      </div>
      </header>
    </div>
  );
}

export default App;
