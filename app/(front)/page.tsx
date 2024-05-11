import DoctorsList from "@/components/DoctorsList";
import { Brands } from "@/components/frontend/Brands";
// import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
// import TabSection from "@/components/frontend/TabSection"
// import ServicesList from "@/components/frontend/services/ServicesList";


export default function Home() {
  return (
   <section>
    <Hero/>
    <DoctorsList/>
    <Brands/>
    
  

    {/* <TabSection/> */}
    {/* <ServicesList/> */}
   </section>
  );
}
