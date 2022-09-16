import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
        <div className="logo"><Link to="/"><img alt="Logo" src="/logo-whitetext.png" /></Link></div>
    </div>
  )
}

export default Header;