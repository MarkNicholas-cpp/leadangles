import GradientButton from "./Utils/GradientButton";
import ListItemCard from "./Utils/ListItemCard";

function Home() {
  return (
    <div className="bg-primary">
      <div className="md:h-[calc(100vh-96px)] flex items-start md:items-center justify-start p-10 pb-0 md:pt-0 md:w-3/4">
        <div className="flex flex-col gap-4 items-start md:gap-8">
          <GradientButton content={"Explore our 2023 Year in Review"} />
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
      <div className="flex items-start justify-center flex-nowrap p-10">
        <ListItemCard />
        <ListItemCard />
        <ListItemCard />
        <ListItemCard />
      </div>
      <div className="py-3">
        <div className="flex items-center justify-center w-full">
          <div>
            <p className="text-white text-3xl text-center mb-10">
              Better together. AngelList partners with industry leaders.
            </p>
            <GradientButton
              content={
                "Our premier partnership program assembles top professionals to deliver comprehensive expertise & support"
              }
            />
          </div>
        </div>
      </div>
      <div className="bg-white px-10 py-32 mb-3">
        <p className="text-lg  mb-16">Software for Venture & Private Equity</p>
        <p className="text-7xl text-angel w-3/4">
          Our software suite amplifies opportunity for venture and private
          equity firms, regardless of stage or provider.
        </p>
        <div className="menu-bar py-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-b border-gray-200 ">
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Attractive Investors
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <img src="/src/assets/svgs/ActiveInvestors.svg" alt="" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              A branded, secure doc sharing experience for your LPs.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Learn More
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Engage investors
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <img src="/src/assets/svgs/EngageInvestors.svg" alt="" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              A bespoke portal experience to engage your investors.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Investor Portal
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Seamless onboarding
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <img src="/src/assets/svgs/SeamlessOnboarding.svg" alt="" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              Intelligent investor onboarding for private markets.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Transact
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Optimize portfolio
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <img src="/src/assets/svgs/OptimizePortfolio.svg" alt="" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              AI-powered portfolio analyzer, driven by your inbox.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Relay
            </button>
          </div>
          <div className="menu-card">
            <p className="font-normal mb-3 font-primary text-xl">
              Manage equity
            </p>
            <div className="flex items-center justify-center p-3 bg-gray-200">
              <img src="/src/assets/svgs/ManageEquity.svg" alt="" />
            </div>
            <div className="menu-desc my-2 font-normal font-primary">
              Cap table management for high-growth companies.
            </div>
            <button className="bg-primary p-3 text-bold text-white rounded-md">
              Explore Equity
            </button>
          </div>
        </div>
        <div className="p-10">
          <div className="bg-[#cdeed3] p-16 ">
            <div className="flex">
              <div className="left">
                <p className="text-2xl text-[#544a2e]">
                  Full Service Fund Management
                </p>
                <p className="text-md text-[#544a2e]">
                  AngelList’s full service offerings provides access to 50+
                  services that remove friction from fund management for venture
                  funds, rolling funds, and syndicates.
                </p>
              </div>
              <div className="right p-10 ">
                <img src="https://www.angellist.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-service.004ba617.png&w=828&q=100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
