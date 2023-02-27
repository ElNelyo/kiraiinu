import logo from './images/logo.png';
import './App.css';
import Navbar from './components/Nav';
import backgroundParachute from './images/background_parachute.png';
import inu from './images/inu.png';
import badge from './images/badge.png';
import parachute from './images/parachute.png';
import main from './images/main.png';
import jeton from './images/jeton.png';
import { ReactComponent as Twitter }from './images/twitter.svg';
import { ReactComponent as Medium }from './images/medium.svg';
import { ReactComponent as Telegram }from './images/telegram.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <div className="h-8  bg-gradient-to-r from-purple-medium to-indigo-400 w-full"></div>
      <div className="w-full h-84 bg-black">
        <img className="w-48 ml-20 pt-8" src={badge}/>
        <img className="w-32 top-12 right-3/4 hidden md:block md:absolute" src={parachute}/>
        <img className="w-48 bottom-0 mt-12 hidden md:block left-12 absolute" src={parachute}/>

        <div className="w-full flex flex-col md:flex-row 2xl:space-x-12 mx-auto w-full md:justify-center">
        <div className='2xl:mt-36 text-center md:text-left'>
          <div className="text-white md:ml-48 mt-12 text-8xl font-bold poppins">Kirai Inu</div>
          <div className="text-white md:ml-48 mt-8 2xl:text-4xl text-xl font-bold tilt">The Dark Shiba coming</div>
          <div className="text-white md:ml-48 2xl:text-4xl text-xl font-bold tilt">soon on Arbitrum</div>
          <div className="text-white md:ml-48  2xl:text-4xl text-xl font-bold tilt">Don't miss it !</div>

          <div className='flex flex-row space-x-4'>
            <div className=' px-1 md:px-2 py-2 mt-8 md:ml-48 text-center font-bold  tilt text-white text-sm  md:w-48 w-72 2xl:w-4/5 md:text-2xl bg-gradient-to-r from-purple-medium to-indigo-400 rounded-lg'>BUY $KIRAI</div>
            <div className=' px-1 md:px-2 py-2 mt-8 md:ml-48 text-center font-bold  tilt text-white text-sm md:w-48 w-72 2xl:w-4/5 md:text-2xl bg-gradient-to-r from-purple-medium to-indigo-400 rounded-lg'>LAUNCH DAPP</div>
          </div>
          <div className='2xl:text-xl text-sm mt-4 text-gray-400 md:ml-48'>
            <a href='https://bridge.arbitrum.io/?l2ChainId=42161'>Bridge to Arbitrum</a>
            </div>
        </div>
        
        <img className="w-full md:w-96 md:ml-32 2xl:w-1/3 2xl:right-0" src={main}/>


        </div>
     
        <div className='h-[1400px] md:h-96 bg-purple-low pt-8 pb-42 2xl:px-48'>
                <div className='text-center pt-8 text-purple-hard font-extrabold text-4xl md:text-8xl'>About Kirai Inu</div>
                <div className='text-center text-3xl mt-12  text-black  px-2 md:px-72 w-full justify-center'>Kirai Inu is The Dark Shiba 🐶⚫</div>
                <div className='text-center text-3xl mt-12  text-black  px-2 md:px-72 w-full justify-center'>$KIRAI is a sustainable token, aiming to provide safety to investors through its own Decentralized Exchange and Private Dashboard based on the Arbitrum blockchain</div>
                <div className='text-center text-3xl mt-12 text-black  px-2 md:px-72 w-full justify-center'>We want to make the project as sustainable as possible through several features like our SafetySwap, the Staking and Kirai Inu NFTs</div>
                <div className='text-center text-3xl mt-12 text-black  px-2 md:px-72 w-full justify-center'>The project aims to restore trust in a system designed not only to reward the creators, but to bring wealth to the entire community.</div>
                <div className='text-center text-3xl mt-12  text-black  px-2 md:px-72 w-full justify-center'>The dog is man's best friend and Kirai Inu is the investors' best friend!</div> 
                
                <div className='text-6xl font-extrabold text-center mt-20 mb-8'>Tokenomics</div>
                <div className='w-2/3 flex flex-row justify-around mx-auto mt-4'>
               
                <div className='flex flex-col mx-auto justify-center text-center'>
                      <div class="font-bold text-purple-hard text-2xl md:text-4xl"> 1B</div>
                      <div class="font-bold text-sm md:text-xl  text-gray-600 uppercase text-center">Total Supply</div>
                  </div>
                  <div className='flex flex-col mx-auto justify-center text-center'>
                      <div class="font-bold text-purple-hard text-2xl md:text-4xl"> 4%</div>
                      <div class="font-bold text-sm md:text-xl text-gray-600 uppercase text-center">Transaction fee</div>
                  </div>
                  <div className='flex flex-col mx-auto justify-center text-center'>
                      <div class="font-bold text-purple-hard text-2xl md:text-4xl"> 2%</div>
                      <div class="font-bold text-sm md:text-xl  text-gray-600 uppercase text-center">Max Wallet </div>
                  </div>
                </div>


                <img className="w-48 top-0 mt-12 hidden md:block left-12" src={jeton}/>


                
          </div>
         
        <img className="w-full bg-purple-low md:pt-[650px] 2xl:pt-[450px]" src={backgroundParachute}></img>
    



      </div>
  
  
      <div className="w-full pt-12 flex flex-col md:flex-row bg-purple-low justify-around ">

            <div>
              <img src={inu} className="h-34 w-full md:h-48 bg-purple-low "></img>

            </div>
            <div className="h-8  blcok md:hidden mb-8 bg-gradient-to-r from-purple-medium to-indigo-400 w-full"></div>

            <div className={"flex flex-col hidden md:block"}>
            <div className="tilt font-bold text-purple-extra-hard text-4xl mb-8">If you have any questions</div>
            <div className="tilt font-bold text-purple-extra-hard text-xl">Come hang out with us on Telegram!
            The team and our community can help you find answers!</div>
            </div>
              <div className="flex flex-row md:flex-col md:space-y-4 mb-8 md:mb-0 justify-around">
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-medium to-indigo-400 rounded-lg">
                    <a href="https://twitter.com/kiraiinu">
                    <Twitter className="ml-1 pt-3 w-10 h-10 text-white" fill={"white"}/>
                    </a>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-medium to-indigo-400 rounded-lg">
                    <a href="https://twitter.com/kiraiinu">
                    <Telegram className="ml-1 pt-3 w-10 h-10 text-white" fill={"white"}/>
                    </a>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-purple-medium  to-indigo-400 rounded-lg">
                    <a href="https://medium.com/@kiraiinu.token">
                      <Medium className="ml-1 pt-3 w-10 h-10 text-white" fill={"white"}/>
                    </a>
                  </div>
              </div>
  
          
      </div>
      </header>
      <footer className='h-16 bg-black text-center text-white pt-4'>
            Copyright © Kiraiinu, All rights reserved
      </footer>
    </div>
  );
}

export default App;
