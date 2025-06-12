import ProductsBar from './components/ProductsBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import TopCatecoriesList from './components/TopCategoriesList';
import EssentialsList from './components/EssentialsList';
import ElectronicsBrandsList from './components/ElectronicsBrandsList';
import { Advertisement } from './components/Advertisement';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductsBar />
      <Advertisement />
      <ProductList />
      <TopCatecoriesList />
      <ElectronicsBrandsList />
      <EssentialsList />
      <Footer />
    </div>
  );
}
