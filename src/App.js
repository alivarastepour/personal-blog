import './sample.scss'
import Spinner from "./Components/Spinner";
import {lazy, Suspense, useState} from "react";
const Header = lazy(() => import('./Components/Header'));
const About = lazy(() => import('./Components/About'));
const ContactUs = lazy(() => import('./Components/Contact-us'));
const Footer = lazy(() => import('./Components/Footer'));
const Introduction = lazy(() => import('./Components/Introduction'));

function App() {
    const [loading, setLoading] = useState(true);
  return<>
          <Suspense fallback={<Spinner/>}>
              <div className='App'>
              <Header/>
              <Introduction/>
              <About/>
              <ContactUs/>
              <Footer/>
              </div>
          </Suspense>

      {/*<div className='App'>*/}
      {/*    <Spinner/>*/}
      {/*</div>*/}
    </>
  ;
}

export default App;
