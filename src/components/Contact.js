import React from "react";

function Contact() {
  return (
    <section className="home-sec8">
      <div className="container2">
        <div className="flex">
          <div className="home-col8 home-col8-1">
            <h2>Request For Call Back</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quod
              odit molestiae quae
            </p>
          </div>
          <div className="home-col8 home-col8-2">
            <form action="submit">
              <input className="name-form" type="text" placeholder="Name" />
              <input className="phone-form" type="number" placeholder="Phone" />
              <select name="Services" className="services-form">
                <option value="Computer Architecture" selected>
                  Computer Architecture
                </option>
                <option value="Java">Java</option>
                <option value="Discrete Mathematics">
                  Discrete Mathematics
                </option>
              </select>
              <button className="submit-btn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;