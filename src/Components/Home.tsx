import ListItemCard from "./Utils/ListItemCard";

function Home() {
  return (
    <div className="bg-primary">
      <div className="md:h-[calc(100vh-96px)] flex items-start md:items-center justify-start p-10 pb-0 md:pt-0 md:w-3/4">
        <div className="flex flex-col gap-4 items-start md:gap-8">
          <button className="glass rounded-full p-3 px-5 md:px-8  bg-gradient-to-r from-purple-200 to-red-400 hover:from-purple-500 hover:to-pink-900 text-transparent bg-clip-text">
            Explore our 2023 Year in Review
          </button>
          <p className="text-6xl md:text-8xl lg:text-9xl text-purple-200 font-angel">
            Built to scale all private funds
          </p>
          <p className="text-2xl text-purple-200 font-angel">
            AngelList provides investors and innovators with the tools to grow.
          </p>
          <button className="border border-white p-3 px-4 rounded-md bg-white text-primary">
            Contact Sales
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-nowrap flex-shrink-0 p-10">
        <ListItemCard />
        <ListItemCard />
        <ListItemCard />
        <ListItemCard />
      </div>
    </div>
  );
}

export default Home;
