import { useRef } from "react";
import ThemeContainer from "../Utils/ThemeContainer";

function About() {
  const eleref = useRef<HTMLParagraphElement>(null);
  return (
    <div className="">
      <div className="bg-primary h-screen flex items-center justify-center px-10">
        <div className="">
          <ul className="list-disc text-xl mb-5">
            <li className="text-white">The folks behind the product</li>
          </ul>
          <p className="text-white font-thin text-6xl md:text-7xl w-1/2 mb-5">
            A Full Stack Financial Service Company for Start-ups
          </p>
        </div>
      </div>
      <ThemeContainer
        genClasses="transition-all duration-500 ease-in-out"
        darkTheme="bg-white text-primary"
        lightTheme="bg-primary text-white"
        elementRef={eleref}
        observerOptions={{
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }}
      >
        <div className="p-20 box-border" ref={eleref}>
          <p className="text-center text-5xl font-bold  ">Our Story</p>
          <div className="flex gap-10">
            <div className="flex flex-col items-center gap-10">
              <div className="video aspect-square h-3/4 w-3/4">
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  poster="/src/assets/thubnail.jpeg"
                  src="https://laip-verssion-2.vercel.app/videos/Fund-Video-Final.mp4"
                ></video>
              </div>
              <div className="content text-justify ">
                Lead Angels was started by a team of three originally from IIT
                Bombay to assist early-stage investments in start-ups. Apart
                from investments, Lead Advisory assists start-ups in follow-on
                fundraising while LA Management & Professional Services(LAMPS)
                supports compliance and governance requirements of these
                companies. The team accomplishes this by providing professional
                assistance to investor-members in company evaluation and the
                portfolio companies in their operations.
              </div>
            </div>
            <div className="flex flex-col items-center gap-10">
              <div className="video aspect-square h-3/4 w-3/4">
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  poster="/src/assets/thubnail2.jpg"
                  src="https://laip-verssion-2.vercel.app//videos/Lead-Angels-Network-Launch-Video.mp4"
                ></video>
              </div>
              <div className="content text-justify ">
                Our mission is to create win-win partnerships between our team,
                founders, and investors on the journey of entrepreneurship. Lead
                Angels Fund, a SEBI-registered Category-I AIF-VC Fund-Angel, and
                is your dedicated partner in the world of startups. As a single
                entity on the cap table, Our investee companies appeal to
                institutions and venture capitalists over other angel networks’
                portfolio. This also ensures compliance easing future fund
                raising.
              </div>
            </div>
          </div>
        </div>
      </ThemeContainer>
      {/* ThemeContainer */}
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl font-bold text-primary ">
            We are a happy, small team
          </p>
          <p className="w-1/2 text-md text-center">
            Meet our dedicated team of seasoned investment professionals,
            committed to delivering exceptional financial solutions and
            personalized client service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
