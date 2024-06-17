
import Link from 'next/link';
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import "./styles.css";

export default function Integrations() {

    return (
        <div>
            <div className="landing-screen integrations-screen">
                <div className="landing-screen-title-integrations">
                    <Link className='link' href="/">
                        <div className="logo-bg-square-integrations">
                          <div className="logo-center-integrations"></div>
                        </div>
                    </Link>
                    <div className="title-integrations">
                        <h2 className='text-jetblack text-xl'>Integrations</h2>
                    </div>
                </div>
                <div className='see-more-container-integrations'>
                     <Link className='see-more-btn' href="/integrations#div1">
                         <p>
                            <span className='see-more-underline'>See more</span> <br/>
                             <IconButton className='btn-see-more' aria-label="unfold more">
                               <UnfoldMoreIcon fontSize="small"/>
                             </IconButton>
                         </p>
                     </Link>
                </div>
            </div>
            <div id='div1' className='div-1'>
                <h1 className='div-1-header'>Acoustic</h1>
                <div className='div-1-subdiv'>
                  <div className='div-1-text'>
                    <h1>Our Expertise</h1>
                    <br/>
                    <p>
                    Our Company has a solid expertise in acoustic design and implementation,<br/>
                    our capabilities in creating optimal spaces for your installations.<br/><br/>
                    With a focus on precision, innovation, and attention to detail,<br/>
                    we developed a comprehensive understanding of the complex<br/>
                    interplay between acoustics, architecture and technology.
                    </p>
                    <br/>
                    <h1>Our services</h1>
                    <p>- Acoustic design and analysis for permanent installations</p>
                    <p>- Room acoustics, sound reinforcement, and audio system design</p>
                    <p>- Measurement and optimization of sound quality</p>
                    <p>- Integration with architectural and structural design elements</p>
                    <p>- Project management and coordination with clients and contractors</p>
                  </div>
                  <div className='div-1-portfolio-container'>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-normal pic1-integrations-acoustic'></div>
                      <div className='div-1-pics pic-normal pic2-integrations-acoustic'></div>
                      <div className='div-1-pics pic-normal pic3-integrations-acoustic'></div>
                    </div>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-xl pic4-integrations-acoustic'></div>
                      <div className='div-1-pics pic-normal pic5-integrations-acoustic'></div>
                      <div className='div-1-pics pic-normal pic6-integrations-acoustic'></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}