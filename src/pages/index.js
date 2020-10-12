import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Link from 'gatsby-link'
import { FaSearch } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div>

      <Header />

      <section className="welcome">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1>
                A collaborative learning platform designed 
                for junior doctors working in Emergency Medicine.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="disabled">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                This resource is temporarily disabled while we 
                curate our content. If you would like to be 
                part of this project, please contact <a href="mailto:hello@disease.io">hello@disease.io</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="search">
        <div className="container">
          <div className="columns">
            <div className="column">
            <div className="control has-icons-left has-icons-right">
              <input className="input" placeholder="Search" />
              <span class="icon is-small is-left">
                <FaSearch/>
              </span>
              <span class="icon is-small is-right">
                <FaArrowRight/> 
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="quickLinks">
        <div className="container">
          <div className="columns">
            <div className="column">
              
              <div className="linkCard">
                <p>Quick Links</p>
                <ul>
                  <li><Link>Welcome to Disease.io</Link></li>
                  <li><Link>About Us</Link></li>
                  <li><Link>Disclaimer</Link></li>
                  <li><Link>Contribute</Link></li>
                </ul>
              </div>

              <div className="linkCard">
                <p>Recently Updated</p>
                <ul>
                  <li><Link>Hyponatraemia</Link></li>
                  <li><Link>Hyperkalaemia</Link></li>
                  <li><Link>ACS</Link></li>
                  <li><Link>COVID-19 Triage</Link></li>
                  <li><Link>Upper GI Bleed</Link></li>
                </ul>
              </div>

            </div>
            <div className="column">
              
              <div className="linkCard">
                <p>Medical Specialties</p>
                <ul>
                  <li><Link>Cardiology</Link></li>
                  <li><Link>Dermatology</Link></li>
                  <li><Link>Emergency Medicine</Link></li>
                  <li><Link>Endocrinology</Link></li>
                  <li><Link>Gastroenterology</Link></li>
                  <li><Link>Geriatrics</Link></li>
                  <li><Link>Infectious Diseases</Link></li>
                  <li><Link>Intensive Care Medicine</Link></li>
                  <li><Link>Obstetrics & Gynaecology</Link></li>
                  <li><Link>Oncology</Link></li>
                  <li><Link>Ophthalmology</Link></li>
                  <li><Link>Neurology</Link></li>
                  <li><Link>Paediatrics</Link></li>
                  <li><Link>Palliative</Link></li>
                  <li><Link>Psychiatry</Link></li>
                  <li><Link>Renal</Link></li>
                  <li><Link>Respiratory</Link></li>
                  <li><Link>Stroke</Link></li>
                  <li><Link></Link></li>
                </ul>
              </div>

            </div>

            <div className="column">
              <div className="linkCard">
                  <p>Surgical Specialties</p>
                  <ul>
                    <li><Link>Cardiothoracics</Link></li>
                    <li><Link>Ear, Nose, & Throat</Link></li>
                    <li><Link>General</Link></li>
                    <li><Link>Neurosurgery</Link></li>
                    <li><Link>Oral & Maxillofacial</Link></li>
                    <li><Link>Paediatric</Link></li>
                    <li><Link>Plastic</Link></li>
                    <li><Link>Trauma & Orthopaedic</Link></li>
                    <li><Link>Urology</Link></li>
                    <li><Link>Vascular</Link></li>
                  </ul>
                </div>`
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