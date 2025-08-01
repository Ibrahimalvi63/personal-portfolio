import React, { useContext } from "react";
import { AppData } from "../context/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTelegram,
  faWhatsapp,
  faTiktok,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const { personalData } = useContext(AppData);
  const footerData = personalData?.footer || [];

  return (
    <div
      style={{
        borderTop: "1px solid #d1c9c9ff",
        width: "100vw",
        padding: "1rem",
      }}
    >
      <div
        style={{
          textAlign: "left",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        <p>Let's connect: </p>
        <div>
          {footerData.youtube ? (
            <a
              href={footerData.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faYoutube}
                style={{ color: "#FF0000" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.facebook ? (
            <a
              href={footerData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faFacebook}
                style={{ color: "#1877F2" }}
              />
            </a>
          ) : (
            ""
          )}

          {footerData.instagram ? (
            <a
              href={footerData.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faInstagram}
                style={{ color: "#E1306C" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.linkdin ? (
            <a
              href={footerData.linkdin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faLinkedin}
                style={{ color: "#0077B5" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.twitter ? (
            <a
              href={footerData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faTwitter}
                style={{ color: "#1DA1F2" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.telegram ? (
            <a
              href={footerData.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faTelegram}
                style={{ color: "#0088CC" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.whatsapp ? (
            <a
              href={footerData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faWhatsapp}
                style={{ color: "#25D366" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.tiktok ? (
            <a
              href={footerData.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faTiktok}
                style={{ color: "#2e2d2d8e" }}
              />
            </a>
          ) : (
            ""
          )}
          {footerData.pinterest ? (
            <a
              href={footerData.pinterest}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faPinterest}
                style={{ color: "#E60023" }}
              />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
        <p>
          <b>{footerData.message}</b>
        </p>
        <p>Designed & Developed by Ibrahim | Privacy Policy | Terms of Use</p>
      </div>
    </div>
  );
}

export default Footer;
