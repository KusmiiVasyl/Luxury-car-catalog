import CarsSwiper from "../components/CarsSwiper";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="containerFluid">
        <div className="row">
          <CarsSwiper />
        </div>
      </div>
    </section>
  );
};

export default Home;
