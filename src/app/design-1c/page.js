
import Link from 'next/link';
import "./styles.css";

export default function Design_1c() {

    return (
        <div>
            {/* <header>
              <section className="header-section-options text-jetblack">
                <div>About Us</div>
                <div>Our Services</div>
                <div>More</div>
              </section>
            </header> */}
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
                    <div className="details-middle text-whitesmoke">About us</div>
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
        </div>
    );
}