
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
                    <p>
                    Our Company has a solid expertise in acoustic design and implementation,<br/>
                    our capabilities in creating optimal spaces for your installations.<br/><br/>
                    With a focus on precision, innovation, and attention to detail,<br/>
                    we developed a comprehensive understanding of the complex<br/>
                    interplay between acoustics, architecture and technology.
                    </p>
                    <br/>
                    <h1>Our Services</h1>
                    <p>- Acoustic design and analysis for permanent installations</p>
                    <p>- Room acoustics, sound reinforcement, and audio system design</p>
                    <p>- Measurement and optimization of sound quality</p>
                    <p>- Integration with architectural and structural design elements</p>
                    <p>- Project management and coordination with clients and contractors</p>
                  </div>
                  <div className='our-main-brands-acoustic-container'>
                      <h1>Our Main Brands</h1>
                      <p>Cambridge Sound Masking</p>
                      <p>Acouspex</p>
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
            <div id='div1' className='div-1'>
                <h1 className='div-1b-header'>Audio</h1>
                <div className='div-1b-subdiv'>
                  <div className='div-1-text'>
                    <h1>Our Services</h1>
                    <p>- Permanent installation audio design and implementation</p>
                    <p>- Audio system design and integration for commercial and residential</p>
                    <p>- Sound system optimization and tuning</p>
                    <p>- System integration with existing infrastructure and technologies</p>
                    <p>- Project management and coordination with clients and contractors</p>
                    <br/>
                    <div className='our-main-brands-audio-container'>
                      <h1>Our Main Brands</h1>
                      <p>Next Audio</p>
                      <p>TOA</p>
                      <p>db Technologies</p>
                      <p>D.A.S Audio</p>
                      <p>Audac</p>
                      <p>Cabasse</p>
                      <p>Klipsh</p>
                      <p>Cambridge</p>
                      <p>Polk</p>
                    </div>
                  </div>
                  <div className='div-1-portfolio-container'>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-normal pic1-integrations-audio'></div>
                      <div className='div-1-pics pic-normal pic2-integrations-audio'></div>
                      <div className='div-1-pics pic-normal pic3-integrations-audio'></div>
                    </div>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-xl pic4-integrations-audio'></div>
                      <div className='div-1-pics pic-normal pic5-integrations-audio'></div>
                      <div className='div-1-pics pic-normal pic6-integrations-audio'></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='slogan-container'>
              <h1 className='title'>Experience Sound Like Never<br/>Before</h1>
              <p>
                At our company, we believe that true audio excellence goes beyond just volume.<br/>
                Our meticulously curated collection of acoustic and audio products promises unparalleled quality and authenticity,<br/>
                delivering a sound experience that is as genuine as it is unforgettable.
              </p>
            </div>
            <div id='div1' className='div-1'>
                <h1 className='div-1-header'>Automation</h1>
                <div className='div-1-subdiv'>
                  <div className='div-1-text'>
                    <h1>Automation</h1>
                    <p></p>
                    <br/>
                    <h1>Our Services</h1>
                    <p></p>
                  </div>
                  <div className='div-1-portfolio-container'>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-normal pic1-integrations-automation'></div>
                      <div className='div-1-pics pic-normal pic2-integrations-automation'></div>
                      <div className='div-1-pics pic-normal pic3-integrations-automation'></div>
                    </div>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-xl pic4-integrations-automation'></div>
                      <div className='div-1-pics pic-normal pic5-integrations-automation'></div>
                      <div className='div-1-pics pic-normal pic6-integrations-automation'></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}