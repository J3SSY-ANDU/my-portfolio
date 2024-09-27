import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./hire-me.css";
import ScrollAnimation from "../../components/scroll-animation/ScrollAnimation";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function HireMe() {
  const [send, setSend] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alerts, setAlerts] = useState({ name: "", email: "", message: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const settingAlerts = (name, email, message) => {
    const newAlerts = { ...alerts };
    const nameAlert = name ? "" : "You have to enter a name.";
    const emailAlert = email ? "" : "You have to enter an email.";
    const messageAlert = message ? "" : "You have to enter a message.";
    newAlerts.name = nameAlert;
    newAlerts.email = emailAlert;
    newAlerts.message = messageAlert;
    setAlerts(newAlerts);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);
    if (!name || !email || !message) {
      settingAlerts(name, email, message);
      setSend(false);
      return;
    }
    emailjs
      .sendForm("service_e09pdjb", "template_cazkx69", form.current, {
        publicKey: "nW9rNMvcRVumig-gI",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
          e.target.reset();
          setSend(false);
          setShowSnackbar(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSend(false);
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };

  return (
    <div className="portfolio__hireMe section__padding" id="hire-me">
      <div className="portfolio__hireMe-container section__width">
        <div className="portfolio__hireMe-container_heading">
          <ScrollAnimation>
            <h1>Send me a message!</h1>
          </ScrollAnimation>
          <ScrollAnimation>
            <p>
              Do you need help with a project or are you thinking of hiring
              someone? I'm available and willing to work with you!
            </p>
          </ScrollAnimation>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="portfolio__hireMe-container_input"
        >
          <div>
            <ScrollAnimation>
              <div className="input-div">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                />
                {alerts.name && (
                  <Alert variant="outlined" severity="error">
                    {alerts.name}
                  </Alert>
                )}
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="input-div">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {alerts.email && (
                  <Alert variant="outlined" severity="error">
                    {alerts.email}
                  </Alert>
                )}
              </div>
            </ScrollAnimation>
          </div>
          <div>
            <ScrollAnimation>
              <div className="input-div">
                <input
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {alerts.message && (
                  <Alert variant="outlined" severity="error">
                    {alerts.message}
                  </Alert>
                )}
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation>
            {!send ? (
              <div>
                <input type="submit" value="Send" id="gradient__button" />
                <Snackbar
                  open={showSnackbar}
                  autoHideDuration={6000}
                  onClose={() => setShowSnackbar(false)}
                  message="Message sent successfully!"
                />
              </div>
            ) : (
              <button type="submit" id="gradient__button" disabled>
                <CircularProgress color="primary" size={20} />
              </button>
            )}
          </ScrollAnimation>
        </form>
      </div>
    </div>
  );
}

export default HireMe;
