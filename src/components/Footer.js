import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "#89CFF0" }}>
      <div className="container py-4">
        <section>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-light" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-light" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-light" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-light" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-github"></i>
          </a>
        </section>
        <hr style={{ borderTop: "5px solid #fff" }} />
        <section>
        <p style={{ color: "black", fontSize: "1.2rem"}}><strong>Share-A-Meal &lt;3</strong></p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
