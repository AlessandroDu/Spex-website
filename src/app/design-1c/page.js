
import Link from 'next/link';
import "./styles.css";

export default function Design_1c() {

    return (
        <div>
            <div className="landing-screen">
              <div className="blur">
              </div>
              <div className="landing-screen-top-half">
                <Link href="/design-1c">
                    <div className="logo-bg-square">
                      <div className="logo-center"></div>
                    </div>
                </Link>
                <div className="details-1c">
                    <div className="details-left text-whitesmoke">office@spex.mu</div>
                    <Link className="details-middle text-whitesmoke" href="/design-1c#about-us">
                      <div>About us</div>
                    </Link>
                    <div className="details-right text-whitesmoke">+230 5453 5710</div>
                </div>
              </div>
              <div className="presentations-container-1c">
                <div>
                  <div className="presentation-left-1c">
                    <div className="header-left-1c"><p className="header-p">Technology</p></div>
                  </div>
                </div>
                <div>
                  <Link href="/integrations">
                    <div className="presentation-middle-1c">
                      <div className="header-middle-1c"><p className="header-p">Integrations</p></div>
                    </div>
                  </Link>
                </div>
                <div>
                  <div className="presentation-right-1c">
                    <div className="header-right-1c"><p className="header-p">Energy</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div id='about-us' className='div1'>
              <h1 className='about-us-header'>About Us</h1>
                <div className='div1-subdiv'>
                  <p className='about-us-p'>
                  Welcome to SPEX Services Ltd,<br/>
                  a leading integration solutions provider based in Mauritius, established in 2007.<br/><br/>

                  With a strong focus on innovation, we specialize in the domains of<br/>
                  audio, lighting, acoustic, smart intercoms, and automation.<br/><br/>

                  Our expertise spans architectural, entertainment, and commercial applications,<br/>
                  enabling us to deliver customized solutions that meet our clients' unique needs.<br/><br/>

                  From conceptualization to implementation, we pride ourselves on our ability to<br/>
                  integrate cutting-edge technology with exceptional design and customer service.
                  </p>
                  <div className='about-us-portfolio-container'>
                    <div className='about-us-portfolio-subcontainer'>
                      <div className='about-us-pics pic1'></div>
                      <div className='about-us-pics pic2'></div>
                      <div className='about-us-pics pic3'></div>
                    </div>
                    <div className='about-us-portfolio-subcontainer'>
                      <div className='about-us-pics pic4'></div>
                      <div className='about-us-pics pic5'></div>
                      <div className='about-us-pics pic6'></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}