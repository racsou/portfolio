import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail_outline"></span>
        Contact Us
      </h1>
      <p className="sub-title">hello worled from the other side</p>

      <div className="flex">
        
        <form className="border">
          <div className="flex">
            <label htmlFor="email">email address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">your message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button className="submit" type="submit">Send</button>
        </form>
        <div className="border animation">
        </div>
      </div>
    </section>
  );
};
export default Contact;
