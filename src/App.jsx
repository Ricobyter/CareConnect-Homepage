import Nav from "./components/Nav";
import Achievements from "./sections/Achievements";
import Hero from "./sections/Hero";
import Subscribe from "./sections/Feedback";
import WhyDonate from "./sections/WhyDonate";
import Faqs from "./sections/Faqs";
import Awards from "./sections/Awards";
import Our_Work from "./sections/Our_work";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from "./sections/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
}, []);
  return (
<main className="relative">
  < Nav/>
  <section className="xl:padding-l wide:padding-r padding-b" id= "hero">
    <Hero/>
  </section>
  <section className="padding" data-aos= "fade-up" id="about-us">
 <WhyDonate/>
</section>
<section className="padding" data-aos= "fade-up" >
 <Achievements /> 
</section>
<section className="padding" data-aos= "fade-up" id="works">
<Our_Work />
</section>
<section className="padding " data-aos= "fade-up">
 <Faqs />
</section>
<section className="padding bg-pale-blue" data-aos= "fade-up">
 <Awards />
</section>
<section className="padding-x sm:py-32 py-16 w-full" data-aos= "fade-up">
 <Subscribe />
</section>

<section className="padding-x bg-black padding-t pb-8 text-white-400">
<Footer />
</section>
</main>
  )
}
