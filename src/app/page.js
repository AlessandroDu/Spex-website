
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="landing-screen">
        <div className="blur">
        </div>
        <div className="landing-screen-left-half">
          <div className="logo-bg-square">
            <div className="logo-center"></div>
          </div>
        </div>
        <div className="presentations-container">
          <div>
            <div className="header-left"><p className="header-p">Software</p></div>
            <div className="presentation-left"></div>
          </div>
          <div>
            <div className="header-middle"><p className="header-p">Integrations</p></div>
            <div className="presentation-middle"></div>
          </div>
          <div>
            <div className="header-right"><p className="header-p">Solar</p></div>
            <div className="presentation-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
