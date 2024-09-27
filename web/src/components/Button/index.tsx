import './index.css';

type ButtonProps = {
  onClick?: () => void,
};

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="add-to-cart-button" onClick={onClick}>
        <span className="button-text">ADICIONAR AO CARRINHO</span>
      </button>
    </div>
  );
};

export default Button;
