import { useRef } from "react";
import ThemeContainer from "../Utils/ThemeContainer";
import MemberCard from "../Utils/MemberCard";

function About() {
  const members: {
    MemImg: string;
    MemName: string;
    MemPosition: string;
  }[] = [
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkarthik.4fbba4e2.png&w=96&q=75",
      MemName: "Karthik Mukkara",
      MemPosition: "Associate - Technology",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmartina.96bac9ff.png&w=96&q=75",
      MemName: "Martina Pereira",
      MemPosition: "Associate - Administration",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdrishti.8addb7d6.png&w=96&q=75",
      MemName: "Drishti Sodha",
      MemPosition: "Manager - Investments",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsangeetha.c9ae9fed.png&w=96&q=75",
      MemName: "Sangeeta Sharma",
      MemPosition: "Manager - Compliance, Accounts & Finance",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjash.ae5c61a6.png&w=96&q=75",
      MemName: "Jash Ranawat",
      MemPosition: "Manager - Investments",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAtharva.1bee94e9.png&w=96&q=75",
      MemName: "Atharva Shah",
      MemPosition: "Manager - Investments",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpriyanka.977a647f.png&w=96&q=75",
      MemName: "Priyanaka Barot",
      MemPosition: "Manager - Investor Relations",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankit.efde3558.png&w=96&q=75",
      MemName: "Ankit Khandelwal",
      MemPosition: "Head - Investor Relations",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnaveena.666f878f.png&w=96&q=75",
      MemName: "Navvena Reddy",
      MemPosition: "Head - Investments",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsonia.1f61a10f.png&w=96&q=75",
      MemName: "Sonia Sahni",
      MemPosition: "Chief Business Officer",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdhruv.9b6c5d2c.png&w=96&q=75",
      MemName: "Dhruv Nath",
      MemPosition: "Director",
    },
    {
      MemImg:
        "https://laip-verssion-2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsushanto.061bc3d9.png&w=96&q=75",
      MemName: "Sushanto Mitra",
      MemPosition: "CEO & Founder",
    },
  ];

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
      <div className="bg-gray-50 py-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-5xl font-bold text-primary ">
            We are a happy, small team
          </p>
          <p className="w-1/2 text-md text-center">
            Meet our dedicated team of seasoned investment professionals,
            committed to delivering exceptional financial solutions and
            personalized client service.
          </p>
          <div className="grid grid-cols-4 my-20">
            {members.map((member) => (
              <MemberCard
                MemImg={member.MemImg}
                MemName={member.MemName}
                MemPosition={member.MemPosition}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
