import ProductsBar from "./components/ProductsBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advertisement from "./components/Advertisement";
import SmartphonesList from "./components/SmartphonesList";
import Footer from "./components/Footer";
import TopCatecoriesList from "./components/TopCategoriesList";
import EssentialsList from "./components/EssentialsList";
import ElectronicsBrandsList from "./components/ElectronicsBrandsList";
import { ADVERTISEMENT } from "./data/dataAdvertisement";

import { Slyder } from "./components/Slyder";

export default function App() {

  return (
    <div>
      <Header />
      <Hero />
      <ProductsBar />
      <Advertisement />

      <Slyder slides={ADVERTISEMENT} />

      <SmartphonesList />
      <TopCatecoriesList />
      <ElectronicsBrandsList />
      <EssentialsList />
      <Footer />
    </div>
  )
}

 
