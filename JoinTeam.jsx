import React from 'react';
import './JoinTeam.css'; // Ensure this is the correct path to your CSS file
import heartIcon from '../images/heartIcon.png';
import moneyIcon from '../images/moneyIcon.png';
import taxIcon from '../images/taxIcon.png';

const JoinTeam = () => {
  return (
    <div className="donation-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Join Team Tomorrow as a monthly donor</h1>
          <p>
            When you choose to give monthly, you make a commitment to fight for future generations around the world. 
            That's why we call our monthly donors "Team Tomorrow." Monthly donations help us consistently address the most urgent issues facing children today, so together, we can create a better tomorrow.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
        <div className="hero-image">
          <img src="https://example.com/path-to-your-image/image.png" alt="Girl" />
        </div>
      </section>

      <section className="info-section">
        <p>
          Up to 15 million girls and boys will never return to school following the pandemic. More than 700 million children 
          are currently living in countries drastically affected by the climate crisis. Nearly 200 million children are living 
          in violent war zones. And in rural America, 1 in 5 children are experiencing food insecurity due to poverty.
        </p>
        <p>
          As a monthly donor, you can make a massive impact for children in desperate need of help.
        </p>
      </section>

      <section className="steps-section">
        <h2>Make a Difference in 3 Easy Steps</h2>
        <div className="steps">
          <div className="step">
            <h3>1 Choose</h3>
            <p>
              Choose an issue you'd like to receive updates on: 
              <a href="#">conflict</a>, <a href="#">the climate crisis</a>, 
              <a href="#">poverty in the U.S.</a>, <a href="#">inequality</a>, 
              or <a href="#">all of the above</a>.
            </p>
          </div>
          <div className="step">
            <h3>2 Donate</h3>
            <p>
              Set your monthly donation amount, which will be used to support programs that address your selected issue 
              and many other issues affecting children in the U.S. and around the world.
            </p>
          </div>
          <div className="step">
            <h3>3 See the Impact</h3>
            <p>
              Get monthly updates to see the impact you're making in partnership with children, communities, and 
              other Team Tomorrow supporters.
            </p>
          </div>
        </div>
      </section>

      <section className="monthly-donor-section">
        <h2>Become a Monthly Donor by Joining Team Tomorrow</h2>
        <p>
          <strong>Team Tomorrow</strong> is a way to connect with the causes you care about through a monthly giving program. 
          Choose a cause that matters to you most, and your recurring gift will go toward addressing the needs of children 
          in the U.S. and around the world.
        </p>

        <div className="donor-causes">
          <div className="cause">
            <img src="https://example.com/path-to-your-image/inequality.png" alt="Stand against inequality" />
            <h3>Stand against inequality for children around the world.</h3>
            <button className="join-button">JOIN TODAY</button>
          </div>
          <div className="cause">
            <img src="https://example.com/path-to-your-image/climate.png" alt="Address the climate crisis" />
            <h3>Address the climate crisis to create a safer planet for future generations.</h3>
            <button className="join-button">JOIN TODAY</button>
          </div>
          <div className="cause">
            <img src="https://example.com/path-to-your-image/var.png" alt="Protect children affected by war" />
            <h3>Help protect children affected by war and conflict.</h3>
            <button className="join-button">JOIN TODAY</button>
          </div>
        </div>
        <p className="choose-issues">Choose to hear about all these issues. Together, we can create a better tomorrow.</p>
      </section>

      <section className="benefits">
        <div className="benefit">
          <img src={heartIcon} alt="Heart Icon" />
          <h3>Your monthly donation is the most effective way to make a difference.</h3>
          <p>
            The ongoing support of monthly donors helps ensure that Save the Children can act quickly 
            when an emergency hits to provide immediate disaster relief.
          </p>
        </div>
        <div className="benefit">
          <img src={moneyIcon} alt="Money Icon" />
          <h3>Giving monthly is the easiest and most convenient way to give.</h3>
          <p>
            As a monthly donor, you’ll know your charitable donation is in place for the future - no further 
            action required.
          </p>
        </div>
        <div className="benefit">
          <img src={taxIcon} alt="Tax Icon" />
          <h3>As a monthly donor, your tax-deductible giving is stress-free.</h3>
          <p>
            By becoming a monthly donor this year, you can rest easy knowing your tax-deductible giving is 
            already in place.
          </p>
        </div>
      </section>

      <section className="video-section">
  <h2>Build a better tomorrow, today</h2>
  <p>Learn more about how you can help children by joining Team Tomorrow.</p>
  <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bG3am1_ty4U?si=cdg2KV7ErPy1G1t6"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</section>



    </div>
  );
};

export default JoinTeam;
