import Banner from "./components/Banner"
import Footer from "./components/Footer"
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
  }, []);

  const addMore = event => {
    event.preventDefault();
  }

  return (
    <main className="bg-[#eeeef1] pt-10">
      <Navbar />
      <Banner />
      <PopularSection menu={menu} addMore={addMore} />
      <RecommendedSection menu={menu} addMore={addMore} />
      <Footer />
    </main>
  )
}

export default App
