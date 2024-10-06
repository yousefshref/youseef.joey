import About from "./Components/About/About"
import FAQ from "./Components/FAQ/FAQ"
import Header from "./Components/Header/Header"
import Plans from "./Components/Plans/Plans"
import Transformations from "./Components/Transformations/Transformations"

function App() {

  return (
    <div dir="rtl" className="flex flex-col">
      <Header />
      <About />
      <Transformations />
      <Plans />
      <FAQ />
      {/* <p>header</p>
      <p>about</p>
      <p>transformations</p>
      <p>plans</p>
      <p>FAQ</p>
      <p>contact</p> */}
    </div>
  )
}

export default App
