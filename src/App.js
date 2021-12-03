import './sample.scss'
import Spinner from "./Components/Spinner";
import {lazy, Suspense} from "react";
import {useSelector} from "react-redux";

const Header = lazy(() => import('./Components/Header'));
const About = lazy(() => import('./Components/About'));
const ContactUs = lazy(() => import('./Components/Contact-us'));
const Footer = lazy(() => import('./Components/Footer'));
const Introduction = lazy(() => import('./Components/Introduction'));
function App() {
    const theme = useSelector((state => state.theme.value)).toLowerCase();
    return<>
            <Suspense fallback={<Spinner/>}>
                <div className={theme === 'default' ? 'App App-Default' : theme === 'dark' ? 'App App-Dark' : 'App App-Light'}>
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
