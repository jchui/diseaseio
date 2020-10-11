import React from "react"
import Header from "../components/header"

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

    </div>

  );
}