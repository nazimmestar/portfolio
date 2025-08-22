import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
    const [status, setStatus] = useState(""); // "success", "error", ""

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                e.target.reset(); // clear form
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }

        // Hide popup after 3 sec
        setTimeout(() => setStatus(""), 3000);
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p> I'm currently available to take on new projects so feel free to send
                        me a message about anything that you want me to work on, You can
                        contact anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>nazim.mestar17@gamil.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+213 674-48-50-43</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Jijel, Algeria</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <input
                        type="hidden"
                        name="apikey"
                        value="aad522a9-6a58-4355-bd3f-2c84e0358f04"
                    />
                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                    />

                    <label>Your Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        name="email"
                        required
                    />

                    <label>Write your message here</label>
                    <textarea
                        name="message"
                        placeholder="Enter Your message"
                        required
                    ></textarea>

                    <button type="submit" className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>

            {/* Popup Notification */}
            {status === "success" && (
                <div className="popup success">✅ Message sent successfully!</div>
            )}
            {status === "error" && (
                <div className="popup error">❌ Something went wrong. Try again.</div>
            )}
        </div>
    );
};

export default Contact;
