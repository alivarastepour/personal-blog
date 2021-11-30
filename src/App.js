import './sample.scss'
import { lazy, Suspense } from 'react';
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import ContactUs from "./Components/Contact-us";
import Footer from "./Components/Footer";
const Header = lazy(() => import('./Components/Header/index'))
function App() {
  return<>
      <div className='App'>
          <Header/>
          <Introduction/>
          <About/>
          <ContactUs/>
          <Footer/>
      </div>
    </>
  ;
}

export default App;
