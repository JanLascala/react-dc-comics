import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import all componentss
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//import data
import navLinks from './data/navLinks'
import comics from './data/comics'

function App() {


    return (
        <>
            <Header navLinks={navLinks} />
            <Main comics={comics} />
            <Footer />
        </>
    )
}

export default App
