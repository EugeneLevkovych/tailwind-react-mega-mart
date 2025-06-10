import ProductsBar from "./components/ProductsBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SmartphonesList from "./components/SmartphonesList";
import Footer from "./components/Footer";
import TopCatecoriesList from "./components/TopCategoriesList";
import EssentialsList from "./components/EssentialsList";
import ElectronicsBrandsList from "./components/ElectronicsBrandsList";
// import { ADVERTISEMENT } from "./data/dataAdvertisement";

import { Advertisement } from "./components/Advertisement";

export default function App() {

  return (
    <div>
      <Header />
      <Hero />
      <ProductsBar />
      <Advertisement />
      <SmartphonesList />
      <TopCatecoriesList />
      <ElectronicsBrandsList />
      <EssentialsList />
      <Footer />
    </div>
  )
}

 
