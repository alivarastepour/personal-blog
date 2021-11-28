import './sample.scss'
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
function App() {
  return<>
      <div className='App'>
          <Header/>
          <Introduction/>
          <About/>
      </div>
    </>
  ;
}

export default App;
