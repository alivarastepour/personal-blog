import './sample.scss'
import Spinner from "./Components/Spinner";
import {createContext, lazy, Suspense, useState} from "react";
import {useSelector} from "react-redux";
import useFetch from './custom-hooks/useFetch';

const Header = lazy(() => import('./Components/Header'));
const About = lazy(() => import('./Components/About'));
const ContactUs = lazy(() => import('./Components/Contact-us'));
const Footer = lazy(() => import('./Components/Footer'));
const Introduction = lazy(() => import('./Components/Introduction'));
const URL = 'https://geo.ipify.org/api/v2/country?apiKey=at_vWj6GggURobnxNbvqBwg8heA5ewma';

export const languageContext = createContext();
function App() {
    const [language, setLanguage] = useState('hello world');
    const theme = useSelector((state => state.theme.value))?.toLowerCase();
    const {value} = useFetch(URL);
    console.log(value);

    return<>
            <Suspense fallback={<Spinner/>}>
                <languageContext.Provider value={{language, setLanguage}}>
                    <div className={`App ${theme ? `App-${theme}` : `App-default`}`}>
                        <Header/>
                        <Introduction/>
                        <About/>
                        <ContactUs/>
                        <Footer/>
                    </div>
                </languageContext.Provider>
            </Suspense>
    </>
  ;
}

export default App;
