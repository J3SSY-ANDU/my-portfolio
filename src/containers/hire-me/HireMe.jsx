import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./hire-me.css";
import ScrollAnimation from "../../components/scroll-animation/ScrollAnimation";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

function HireMe() {
  const [send, setSend] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  const [alerts, setAlerts] = useState({ name: "", email: "", message: ""});
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const settingAlerts = (name, email, message) => {
    const newAlerts = { ...alerts };
    const nameAlert = name ? "" : "You have to enter a name.";
    const emailAlert = email
      ? verifyEmail(email)
      : "You have to enter an email.";
    const messageAlert = message ? "" : "You have to enter a message.";
    newAlerts.name = nameAlert;
    newAlerts.email = emailAlert;
    newAlerts.message = messageAlert;
    setAlerts(newAlerts);
  };

  const verifyEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    
  if (re.test(email)) {
      return "";
    }
    return "You have to enter a valid email.";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSend(true);
    const emailVerified = verifyEmail(email);
    if (!name || emailVerified || !message) {
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
          setShowSnackbar({ ...showSnackbar, open: true });
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSend(false);
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };

  const { vertical, horizontal, open } = showSnackbar;

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
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (alerts.name) {
                      settingAlerts(e.target.value, email, message);
                    }
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (alerts.email) {
                      settingAlerts(name, e.target.value, message);
                    }
                  }}
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
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (alerts.message) {
                      settingAlerts(name, email, e.target.value);
                    }
                  }}
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
              <input type="submit" value="Send" id="gradient__button" />
            ) : (
              <button type="submit" id="gradient__button" disabled>
                <CircularProgress color="primary" size={20} sx={{position: "relative", bottom: "-2px"}}/>
              </button>
            )}
          </ScrollAnimation>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar({ ...showSnackbar, open: false })}
        message="Message sent successfully!"
        key={vertical + horizontal}
      >
        <Alert severity="success" variant="outlined">
          Message sent successfully!
        </Alert>
      </Snackbar>
      <Dialog
        open={error}
        onClose={() => setError(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{color: '#fff', background: '#4A4947'}}>
          {"Message not sent."}
        </DialogTitle>
        <DialogContent sx={{background: "#4A4947"}}>
          {/* write something here about writing it via email account */}
          <DialogContentText id="alert-dialog-description" sx={{color: '#fff'}}>
            Something went wrong with the message. Please try again or send me
            an email pressing below.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{background: '#4A4947'}}>
          <Button onClick={() => setError(false)} autoFocus>
            Close
          </Button>
          <Button>
            <a href="mailto:jessy.andujar@upr.edu">Send Email</a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default HireMe;
