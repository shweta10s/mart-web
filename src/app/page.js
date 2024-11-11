import Image from "next/image";
import HeroSection from "./components/hero-section";
import HomeBest from "./components/home-best";
import HomeCategory from "./components/home-category";
import HomeDepartment from "./components/home-department";
import HomeAbout from "./components/home-about";
import HomeBenefits from "./components/home-benefits";
// import HomeService from "./components/home-service";
// import HomeChoose from "./components/home-choose";
// import HomeClients from "./components/home-clients";
// import HomeContact from "./components/home-contact";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HomeBest />
      <HomeCategory />
      <HomeDepartment />
      <HomeAbout />
      <HomeBenefits />
      {/* <HomeChoose /> */}
      {/* <HomeClients /> */}
      {/* <HomeContact /> */}
    </div>
  );
}
