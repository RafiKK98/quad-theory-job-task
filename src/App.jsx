import Banner from "./components/Banner"
import Footer from "./components/Footer"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Navbar from "./components/Navbar";
import PopularSection from "./components/PopularSection";
import RecommendedSection from "./components/RecommendedSection";
import { useEffect, useState } from "react";

function App() {

  const [ menu, setMenu ] = useState([]);

  useEffect(() => {
    fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMenu(data.Items);
    })
  }, [])

  return (
    <main className="bg-[#eeeef1] pt-10">
      <Navbar />
      <Banner />
      <PopularSection menu={menu} />
      <RecommendedSection menu={menu} />
      <Footer />
    </main>
  )
}

export default App
