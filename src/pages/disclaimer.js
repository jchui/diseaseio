import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Disclaimer() {
  return (
    <div>

      <Header />

      <section className="welcome">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1>
                Disclaimer
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="disclaimer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <span className="tag">Important Notice</span>
              <h2>
                This resource is designed for Medical Professionals only. 
                This information is not intended to replace clinical judgement 
                or guide individual care in any manner.
              </h2>
              <p>
                This site is for informational purposes only. It is designed to 
                serve as a community for medical professionals and is not a substitute 
                for professional medical care.
              </p>
              <p>
                Members of the general public should always seek medical advice 
                from a qualified medical practitioner.
              </p>
              <p>
                All content is posted and moderated by qualified healthcare professionals 
                with full GMC registration. However, the authors of this site do 
                not accept any liability if this site or any information on this site 
                is used for patient care.
              </p>
              <p>
                It is the clinican's responsibility to determine appropriate management 
                for their patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>

  );
}