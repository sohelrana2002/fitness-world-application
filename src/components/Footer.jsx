import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <article>
          <Link to="fitness-world-application/" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            deleniti necessitatibus, iste quia repellendus porro qui sequi
            recusandae id at.
          </p>
          <div className="social_media">
            <a href="" target="_blank" rel="noreferrer noopener">
              <FaFacebookF />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <FaLinkedin />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiOutlineTwitter />
            </a>
            <a href="" target="_blank" rel="noreferrer noopener">
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Comunites</Link>
          <Link to="/s">FAQs</Link>
        </article>

        <article>
          <h4>Get In Touch</h4>
          <Link to="fitness-world-application/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="copy_write">
        <small>2023 Created By SOHEL &copy; All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
