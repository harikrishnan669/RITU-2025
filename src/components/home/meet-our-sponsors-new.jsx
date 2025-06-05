import Header from "@/components/header";
import Marquee from "react-fast-marquee";

export default function MeetOurSponsorsNew() {
  return (
    <>
      <Header title="Meet Our Partners" />
      <Marquee speed={50} gradient={false} direction="left">
        <div className="flex flex-row justify-evenly items-center w-full h-full">
          <img
            src="/sponsors/berger.png"
            alt="Berger"
            className=" bg-white px-10 py-3  rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/sbi.png"
            alt="SBI"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/lic.png"
            alt="LIC"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />

                    <img
            src="/sponsors/berger.png"
            alt="Berger"
            className=" bg-white px-10 py-3  rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/sbi.png"
            alt="SBI"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/lic.png"
            alt="LIC"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
        </div>
      </Marquee>

         <Marquee speed={50} gradient={false} direction="right" className="mt-10 mb-10">
        <div className="flex flex-row justify-evenly items-center w-full h-full">
          <img
            src="/sponsors/berger.png"
            alt="Berger"
            className=" bg-white px-10 py-3  rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/sbi.png"
            alt="SBI"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/lic.png"
            alt="LIC"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />

                    <img
            src="/sponsors/berger.png"
            alt="Berger"
            className=" bg-white px-10 py-3  rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/sbi.png"
            alt="SBI"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
          <img
            src="/sponsors/lic.png"
            alt="LIC"
            className="bg-white px-10 py-3 rounded-xl mx-10 h-32"
          />
        </div>
      </Marquee>
    </>
  );
}
