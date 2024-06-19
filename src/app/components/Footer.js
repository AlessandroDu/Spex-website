
import Link from 'next/link';
import "./footer-styles.css";

export default function Footer() {

    return (
        <footer>
            <div className="footer-left-subdiv">
                <section className='contact-us'>
                    <Link className='link' href="/">
                        <div className="logo-bg-square-footer">
                          <div className="logo-center-footer"></div>
                        </div>
                    </Link>
                    <br/>
                    <h2>Contact Us</h2>
                    <p className='text-whitesmoke'>Phone: +230 5453 5710</p>
                    <p className='text-whitesmoke'>Email: office@spex.mu</p>
                </section>
                <section className="our-location">
                    <h2>Our shop</h2>
                    <p className="text-whitesmoke">
                        Monday to Friday 9h00 - 16h30<br/>
                        Saturday 9h00 - 13h00<br/>
                        Sunday Closed
                    </p>
                    <br/>
                    <h2>Location</h2>
                    <p className="text-whitesmoke link">
                        <Link href="https://maps.app.goo.gl/d5Vy9bVb7FtKxzes6">https://maps.app.goo.gl/d5Vy9bVb7FtKxzes6</Link>
                    </p>
                </section>
            </div>
            <div className="footer-right-subdiv">
                <section className='software'>
                    <Link href="/software">
                        <h2 className='link'>Software</h2>
                    </Link>
                    <p className='text-whitesmoke'>
                        Coming Soon
                    </p>
                </section>
                <section className='integrations'>
                    <Link href='/integrations'>
                        <h2 className='link'>Integrations</h2>
                    </Link>
                    <p className='text-whitesmoke'>
                        <Link href='/integrations#acoustic'>Acoustic<br/></Link>
                        <Link href='/integrations#audio'>Audio<br/></Link>
                        <Link href='/integrations#automation'>Automation<br/></Link>
                    </p>
                </section>
                <section className='energy'>
                    <Link href='/energy'>
                        <h2 className='link'>Energy</h2>
                    </Link>
                    <p className='text-whitesmoke'>
                        <Link href='/energy#'>Plug & Play solar energy solutions<br/></Link>
                        <Link href='/energy#'>IRVE<br/></Link>
                        <Link href='/energy#'>Service</Link>
                    </p>
                </section>
            </div>
        </footer>
    );
}