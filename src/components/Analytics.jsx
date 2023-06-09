import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            ducimus eos facere dolorem rem odio voluptatum at alias earum
            incidunt. Sit, voluptatum libero! Velit in, perferendis voluptatum
            nulla earum voluptate!
          </p>
          <button className="bg-black w-[200px] text-white rounded-md font-medium md:mx-0 my-6 mx-auto py-3 text">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
