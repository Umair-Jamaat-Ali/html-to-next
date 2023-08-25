import Button from "./(components)/button/Button";
import NavBar from "./(components)/navbar/NavBar";
import TextCard from "./(components)/textCard/textCard";


export default function Home() {
  return (
    <>
      <section class="header">
        <NavBar />
        <div class="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          {/* <a href="#" class="hero_btn">Visit Us To Know More</a> */}
          <Button title="Visit Us To Know More" />
        </div>
      </section>

      <section class="course">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <TextCard heading="Undergraduate Programs" />
          <TextCard heading="Graduate Programs" />
          <TextCard heading="Adult Learning & Degree Completion" />
        </div>
      </section>

      <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" class="hero_btn">CONTACT US</a>
      </section>

    </>
  )
}
