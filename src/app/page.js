
import Link from 'next/link';

export default function Home() {
  return (
    <div>
            <div className="landing-screen">
              <div className="blur">
              </div>
              <div className="landing-screen-top-half">
                <Link href="/">
                    <div className="logo-bg-square">
                      <div className="logo-center"></div>
                    </div>
                </Link>
                <div className="details">
                    <div className="details-left text-whitesmoke">office@spex.mu</div>
                    <Link className="details-middle text-whitesmoke" href="/#about-us">
                      <div>About us</div>
                    </Link>
                    <div className="details-right text-whitesmoke">+230 5453 5710</div>
                </div>
              </div>
              <div className="presentations-container">
                <div>
                  <div className="presentation-left">
                    <div className="header-left"><h2 className="header-p">Technology</h2></div>
                  </div>
                </div>
                <div>
                  <Link href="/integrations">
                    <div className="presentation-middle">
                      <div className="header-middle"><h2 className="header-p">Integrations</h2></div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link href="/energy">
                    <div className="presentation-right">
                      <div className="header-right"><h2 className="header-p">Energy</h2></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div id='about-us' className='div-1'>
              <h1 className='div-1-header'>About Us</h1>
                <div className='div-1-subdiv'>
                  <div className='div-1-text'>
                    <h1>Welcome to SPEX Services Ltd</h1>
                    <p>
                    A leading integration solutions provider based in Mauritius, established in 2007.<br/><br/>

                    With a strong focus on innovation, we specialize in the domains of audio, lighting, acoustic,<br/>
                    smart intercoms, and automation.<br/><br/>

                    Our expertise spans architectural, entertainment, and commercial applications, enabling us<br/>
                    to deliver customized solutions that meet our clients' unique needs.<br/><br/>

                    From conceptualization to implementation, we pride ourselves on our ability to integrate<br/>
                    cutting-edge technology with exceptional design and customer service.
                    </p>
                  </div>
                  <div className='div-1-portfolio-container'>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-normal pic1-about-us'></div>
                      <div className='div-1-pics pic-normal pic2-about-us'></div>
                      <div className='div-1-pics pic-normal pic3-about-us'></div>
                    </div>
                    <div className='div-1-portfolio-subcontainer'>
                      <div className='div-1-pics pic-xl pic4-about-us'></div>
                      <div className='div-1-pics pic-normal pic5-about-us'></div>
                      <div className='div-1-pics pic-normal pic6-about-us'></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='our-brands-container'>
              <h1>Our Brands</h1>
              <div className='our-brands-container-logos'>
                <div className='logo-pics logo1'></div>
                <div className='logo-pics logo2'></div>
                <div className='logo-pics logo3'></div>
                <div className='logo-pics logo4'></div>
                <div className='logo-pics logo5'></div>
                <div className='logo-pics logo6'></div>
                <div className='logo-pics logo7'></div>
              </div>
            </div>
        </div>
  );
}
