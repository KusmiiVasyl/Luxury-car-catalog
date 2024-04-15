import CarsSwiper from "../components/CarsSwiper";

const Home = ({ cars }) => {
  return (
    <section id="home" className="home">
      <div className="containerFluid">
        <div className="row">
          <CarsSwiper cars={cars} />
        </div>
      </div>
    </section>
  );
};

export default Home;
