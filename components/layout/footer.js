import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer} id="footer">
      <div className={classes.socialMedia}>
        <a
          href="https://instagram.com/salunaalavi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/salunaalavi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:salunaalavi@gmail.com" target="_blank" rel="noreferrer">
          <i className="fa fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/salunaalavi/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.me/6281327040733" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div>Saluna Alavi © 2022</div>
    </footer>
  );
};
export default Footer;
