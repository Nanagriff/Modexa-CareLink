import DoctorsList from "@/components/DoctorsList";
import { Brands } from "@/components/frontend/Brands";
import Hero from "@/components/frontend/Hero";
// import TabSection from "@/components/frontend/TabSection"
// import ServicesList from "@/components/frontend/services/ServicesList";


export default function Home() {
  return (
   <section>
    <Hero/>
    <Brands/>
    {/* <TabSection/> */}
    <DoctorsList/>
    {/* <ServicesList/> */}
   </section>
  );
}
