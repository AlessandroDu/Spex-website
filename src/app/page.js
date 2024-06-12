import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <header>
          <section className="header-section-options text-jetblack">
            <div>About Us</div>
            <div>Our Services</div>
            <div>More</div>
          </section>
        </header>
        <div className="landing-screen background-whitesmoke">
          <div className="blur">
          </div>
          <div className="logo-bg-square">
            <div className="logo-center"></div>
          </div>
            <div className="presentation-left text-jetblack">
              <div></div>
              <div></div>
            </div>
            <div className="presentation-middle">

            </div>
            <div className="presentation-right">

            </div>
        </div>
      </div>
    </main>
  );
}
