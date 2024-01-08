import Banner from "./components/Banner"
import Footer from "./components/Footer"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Navbar from "./components/Navbar";

function App() {

  return (
    <main className="bg-[#eeeef1] pt-10">
      <Navbar />
      <Banner />
      <h1 className="text-3xl">
        pti corp
      </h1>
      <Footer />
    </main>
  )
}

export default App
