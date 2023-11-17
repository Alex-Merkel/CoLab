import Navbar from './components/navbar'
import Toggle from './components/toggle'
import Intro from './components/intro'
import Projects from './components/projects'
import About from './components/about'
import Footer from './components/footer'
import './App.css'

import useLocalStorage from "use-local-storage";


function App() {
  // Setting isDark default to false and saving value to Local Storage
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      <Navbar />
      <Intro />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App