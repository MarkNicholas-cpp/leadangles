import { useRef } from "react";
import GradientButton from "./Utils/GradientButton";
import ListItemCard from "./Utils/ListItemCard";
import ThemeContainer from "./Utils/ThemeContainer";

function Home() {
  const eleref = useRef<HTMLParagraphElement>(null);
  const eleref2 = useRef<HTMLDivElement>(null);
  return (
    <>
      <ThemeContainer
        genClasses="py-32 mb-3 transition-all duration-500 ease-in-out"
        darkTheme="bg-white text-primary"
        lightTheme="bg-primary text-white"
        elementRef={eleref}
        observerOptions={{
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }}
      >
        <div className="md:h-[calc(100vh-96px)] flex items-start md:items-center justify-start p-10 pb-0 md:pt-0 md:w-3/4">
          <div className="flex flex-col gap-4 items-start md:gap-8">
            <GradientButton content={"Explore our 2023 Year in Review"} />
            <p className="text-6xl md:text-8xl lg:text-9xl dark:text-purple-200 font-angel">
              Built to scale all private funds
            </p>
            <p className="text-2xl dark:text-purple-200 font-angel">
              AngelList provides investors and innovators with the tools to
              grow.
            </p>
            <button className="border border-white p-3 px-4 rounded-md bg-white dark:text-primary">
              Contact Sales
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center flex-nowrap overflow-scroll no-scrollbar p-10">
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
        </div>

        <div className="py-3">
          <div className="flex items-center justify-center w-full">
            <div className="mb-10">
              <p className="text-3xl text-center mb-10" ref={eleref}>
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
        <div className="px-10">
          <p className="text-lg  mb-16">
            Software for Venture & Private Equity
          </p>
          <p className="text-4xl md:text-7xl text-angel md:w-3/4">
            Our software suite amplifies opportunity for venture and private
            equity firms, regardless of stage or provider.
          </p>
        </div>
        <div className="menu-bar px-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-b border-gray-200 ">
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
          <div className="bg-[#cdeed3]">
            <div className="flex flex-col md:flex-row">
              <div className="left p-8 md:p-16 flex-1 flex gap-3 flex-col justify-around">
                <p className="text-[1.5rem] md:text-3xl text-[#544a2e]">
                  Full Service Fund Management
                </p>
                <p className="text-justify md:text-lg text-[#544a2e]">
                  AngelList’s full service offerings provides access to 50+
                  services that remove friction from fund management for venture
                  funds, rolling funds, and syndicates.
                </p>
                <a href="#" className="text-md underline text-[#544a2e]">
                  Explore Our Funds and Syndicate Offerings
                </a>
              </div>
              <div className="right flex-1 ml-10 md:ml-0">
                <img
                  src="https://www.angellist.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffull-service.004ba617.png&w=828&q=100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </ThemeContainer>
      <ThemeContainer
        lightTheme="bg-white text-primary text-semibold"
        darkTheme="dark:bg-[#8A744A] dark:text-[#E0FEE6]"
        genClasses="py-10 transition-all duration-500 ease-in-out"
        elementRef={eleref2}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10"
          ref={eleref2}
        >
          <div className="max-w-96">
            <p className="text-xl">By the numbers</p>
            <p className="text-6xl my-3">Fueling innovation</p>
            <p className="text-lg text-justify">
              With more than half of all top-tier VC deals run through the
              platform, AngelList is at the heart of venture investing. This
              exposure gives AngelList the insight to identify gaps in the VC
              market and build the solutions that bridge them.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col border-t dark:border-[#5D5337]">
            <p className="text-9xl md:text-[15rem] ">$124B</p>
            <p className="text-sm">assets on platform</p>
          </div>
          <div className="max-w-96">
            <img
              src="https://cdn.sanity.io/images/q8bht0jl/production/6e8ca24fe3ddca4ae1805f9452371ce590ebade9-864x432.png?auto=format&fit=max&q=100&w=432"
              alt=""
              className="w-full"
            />
            <p className="text-lg text-justify">
              The State of U.S. Early-Stage Venture & Startups: 3Q23
            </p>
            <GradientButton content="Data" />
          </div>
          <div className="border-t border-b dark:border-[#5D5337] grid grid-cols-2">
            <div className="p-5 border-b dark:border-[#5D5337]">
              <p className="text-6xl md:text-8xl">23k+</p>  
              <p className="text-normal">funds and syndicates</p>
            </div>
            <div className="p-5 border-b dark:border-[#5D5337]">
              <p className="text-6xl md:text-8xl">12k+</p>
              <p className="text-normal">Active Startups</p>
            </div>
            <div className="p-5 ">
              <p className="text-6xl md:text-8xl">85k+</p>
              <p className="text-normal">active investors</p>
            </div>
            <div className="p-5 ">
              <p className="text-6xl md:text-8xl">$8B</p>
              <p className="text-normal">raised by active startups</p>
            </div>
          </div>
        </div>
      </ThemeContainer>

    </>
  );
}
export default Home;
