import Hero from './Hero';
import GenderCategory from "./GenderCategory";
import Product from "./Product";

const Home = ({}) => {
  return (
    <div className="Home bg-neutral-200">
        <Hero />
        <GenderCategory />
        <Product />
    </div>
  )
}

export default Home;