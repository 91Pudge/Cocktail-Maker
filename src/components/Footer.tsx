import "./css_files/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>Copyright {new Date().getFullYear()} Cocktail Maker</p>
      </div>
    </footer>
  );
};

export default Footer;
