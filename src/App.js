import './sample.scss'
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import ContactUs from "./Components/Contact-us";
function App() {
  return<>
      <div className='App'>
          <Header/>
          <Introduction/>
          <About/>
          <ContactUs/>
      </div>
    </>
  ;
}

export default App;
