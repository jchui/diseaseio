import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from 'gatsby-link'

export default function About() {
  return (
    <div>

      <Header />

      <section className="welcome">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1>
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h2>
                        Our mission is to provide you with the 
                        most up to date information across the 
                        entire field of medicine; up until the 
                        point of referral to specialties.
                    </h2>
                    <p>
                        We aim to support junior doctors when 
                        dealing with common presenting complaints 
                        in Emergency Medicine. We want to provide 
                        a concise, evidence-based management plan 
                        for the initial stages of treating an 
                        acutely unwell patient.
                    </p>
                    <p>
                        All content is written by qualified 
                        medical professionals with full GMC 
                        registration. Authors have also been 
                        asked to provide a list of their 
                        qualifications where possible.
                    </p>
                    <p>
                        If you are interested in joining our 
                        team, drop a message to <Link to="mailto:hello@disease.io">hello@disease.io</Link>.
                    </p>

                    <hr/>

                    <h3>Founder</h3>
                    <ul>
                        <li>
                            Dr. Jeremy Tsz Kwan Chui MBChB BMedSci(Hons)
                            <span>ACCS ST1 Emergency Medicine Trainee, London</span>
                        </li>
                    </ul>

                    <h3>Editor-In-Chief</h3>
                    <ul>
                        <li>
                            ---
                        </li>
                    </ul>

                    <h3>Authors</h3>
                    <ul>
                        <li>
                            ---
                        </li>
                    </ul>

                    <h3>Engineering</h3>
                    <ul>
                        <li>
                            ---
                        </li>
                    </ul>

                </div>
            </div>
        </div>
      </section>

      <Footer />

    </div>

  );
}