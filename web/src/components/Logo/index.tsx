import logoImage from '../../assets/Logo.png'
import './index.css'

const Logo = () => {
  return (
    <div className="logo">
      <span className="logo__text">COGNYSHOES</span>
      <img src={logoImage} alt="logo" />
    </div>
  )
}

export default Logo