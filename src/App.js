import './sample.scss'
import Spinner from "./Components/Spinner";
import {lazy, Suspense, useState} from "react";
import {useSelector} from "react-redux";

const Header = lazy(() => import('./Components/Header'));
const About = lazy(() => import('./Components/About'));
const ContactUs = lazy(() => import('./Components/Contact-us'));
const Footer = lazy(() => import('./Components/Footer'));
const Introduction = lazy(() => import('./Components/Introduction'));
function App() {
    const [loc, setLoc] = useState();
    const theme = useSelector((state => state.theme.value))?.toLowerCase();
    useSelector((state1 => state1.userLocation.value.then(r => setLoc(r.location.country))))
    loc && console.log(loc);

    return<>
            <Suspense fallback={<Spinner/>}>
                <div className={`App ${theme ? `App-${theme}` : `App-default`}`}>
                    <Header/>
                    <Introduction/>
                    <About/>
                    <ContactUs/>
                    <Footer/>
                </div>
            </Suspense>
    </>
  ;
}

export default App;
