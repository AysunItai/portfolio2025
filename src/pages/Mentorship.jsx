import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";
import StartProject from "../components/StartProject";
import Footer from "../components/Footer";
import {useEffect,useState} from "react";
import {datamentor} from "../data/datamentor.js";
import {datamentorabout} from "../data/datamentorabout.js";
import {testmentdata} from "../data/testmentdata.js";
import {startmentoring} from "../data/startmentoring.js";
function Mentorship() {
  const [mentorPage, setMentorPage] = useState(true);
  return (
    <div style={{width:'100%'}}>
    <Hero mainTitle={datamentor[0].mainTitle}  secondTitle={datamentor[0].secondTitle} myImg={datamentor[0].myImg} heroImg={datamentor[0].heroImg} mentorPage={mentorPage}/>
    <About title={datamentorabout[0].title} content={datamentorabout[0].content}/>
    <Testimonials test={"Happy menties"} data={testmentdata} />
    <StartProject title={startmentoring[0].title} content={startmentoring[0].content} btnIcon={startmentoring[0].btnIcon} btnText={startmentoring[0].btnText} mentorPage={mentorPage}/>
    <Footer />
    </div>
  );
}
export default Mentorship;