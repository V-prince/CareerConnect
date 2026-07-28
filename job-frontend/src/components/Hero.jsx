

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
            India's Smart Career Platform
        </span>

        <h1>
          Find Your Dream
          <br />
          <span>Job & Internship</span>
        </h1>

        <p>
          Explore thousands of verified jobs and internships from top
          companies. Build your career with confidence.
        </p>

        <div className="search-box">

          <div className="input-group">
            <input
              type="text"
              placeholder="Job title"
            />
          </div>

          <div className="input-group">

            <select>
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Surat</option>
              <option>Ahemdabad</option>
            </select>
          </div>

          <button>
            Search
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h2>15K+</h2>
            <p>Jobs</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2>8K+</h2>
            <p>Students Hired</p>
          </div>

        </div>

      </div>

      <div className="hero-right">
        <img alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;