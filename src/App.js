import './sample.scss'
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import ContactUs from "./Components/Contact-us";
import Footer from "./Components/Footer";
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
