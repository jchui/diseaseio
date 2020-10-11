import React from "react"
import Header from "../components/header"
import { FaSearch } from 'react-icons/fa'

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

      <section className="search">
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>

        <div className="container">
          <div className="columns">
            <div className="column">
            <div className="control has-icons-left has-icons-right">
              <input className="input" placeholder="Search" />
              <span class="icon is-small is-left">
                <FaSearch/>
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
                  <li><a>Welcome to Disease.io</a></li>
                  <li><a>About Us</a></li>
                  <li><a>Disclaimer</a></li>
                  <li><a>Contribute</a></li>
                </ul>
              </div>

              <div className="linkCard">
                <p>Recently Updated</p>
                <ul>
                  <li><a>Hyponatraemia</a></li>
                  <li><a>Hyperkalaemia</a></li>
                  <li><a>ACS</a></li>
                  <li><a>COVID-19 Triage</a></li>
                  <li><a>Upper GI Bleed</a></li>
                </ul>
              </div>

            </div>
            <div className="column">
              
              <div className="linkCard">
                <p>Medical Specialties</p>
                <ul>
                  <li><a>Cardiology</a></li>
                  <li><a>Dermatology</a></li>
                  <li><a>Emergency Medicine</a></li>
                  <li><a>Endocrinology</a></li>
                  <li><a>Gastroenterology</a></li>
                  <li><a>Geriatrics</a></li>
                  <li><a>Infectious Diseases</a></li>
                  <li><a>Intensive Care Medicine</a></li>
                  <li><a>Obstetrics & Gynaecology</a></li>
                  <li><a>Oncology</a></li>
                  <li><a>Ophthalmology</a></li>
                  <li><a>Neurology</a></li>
                  <li><a>Paediatrics</a></li>
                  <li><a>Palliative</a></li>
                  <li><a>Psychiatry</a></li>
                  <li><a>Renal</a></li>
                  <li><a>Respiratory</a></li>
                  <li><a>Stroke</a></li>
                  <li><a></a></li>
                </ul>
              </div>

            </div>

            <div className="column">
              <div className="linkCard">
                  <p>Surgical Specialties</p>
                  <ul>
                    <li><a>Cardiothoracics</a></li>
                    <li><a>Ear, Nose, & Throat</a></li>
                    <li><a>General</a></li>
                    <li><a>Neurosurgery</a></li>
                    <li><a>Oral & Maxillofacial</a></li>
                    <li><a>Paediatric</a></li>
                    <li><a>Plastic</a></li>
                    <li><a>Trauma & Orthopaedic</a></li>
                    <li><a>Urology</a></li>
                    <li><a>Vascular</a></li>
                  </ul>
                </div>`
            </div>

          </div>
        </div>
      </section>

    </div>

  );
}