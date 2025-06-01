import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import StartProject from '../components/StartProject';
import Footer from '../components/Footer';
import {datamain} from '../data/datamain.js';
import {dataaboutme} from '../data/dataaboutme.js';
import {testData} from "../data/testData.js";
import { startproject } from '../data/startproject';
function Main() {
    
    return (
        <div style={{width:'100%'}}>
         <Hero mainTitle={datamain[0].mainTitle}  secondTitle={datamain[0].secondTitle} myImg={datamain[0].myImg} heroImg={datamain[0].heroImg}/>
         <About title={dataaboutme[0].title} content={dataaboutme[0].content}/>
         <Skills/>
         <Portfolio />
         <Testimonials test={"Testimonials"} data={testData} />
         <StartProject title={startproject[0].title} content={startproject[0].content} btnIcon={startproject[0].btnIcon} btnText={startproject[0].btnText} />
         <Footer />
        </div>
    )
}
export default Main