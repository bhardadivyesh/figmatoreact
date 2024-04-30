import "./FrameComponent.css";
import facebook from "../../assets/aboutUs/logos/Facebook.png"
import netflix from "../../assets/aboutUs/logos/Netflix.png"
import amazon from "../../assets/aboutUs/logos/Amazon.png"
import youtube from "../../assets/aboutUs/logos/YouTube.png"
import google from "../../assets/aboutUs/logos/Google.png"

const FrameComponent = () => {
  return (
    <div className="title-parent">
      <div className="title7">
        We’ve built with the most growth company around the world
      </div>
      <div className="facebook-logowine-parent">
        <img
          className="facebook-logowine-icon"
          loading="lazy"
          alt=""
          src={facebook}
        />
        <img
          className="netflix-logowine-icon"
          loading="lazy"
          alt=""
          src={netflix}
        />
        <div className="amazon-company-logowine-wrapper">
          <img
            className="amazon-company-logowine-icon"
            loading="lazy"
            alt=""
            src={amazon}
          />
        </div>
        <div className="amazon-company-logowine-wrapper">
          <img
            className="amazon-company-logowine-icon"
            loading="lazy"
            alt=""
            src={youtube}
          />
        </div>
        <img
          className="google-logowine-1-icon"
          loading="lazy"
          alt=""
          src={google}
        />
      </div>
    </div>
  );
};

export default FrameComponent;