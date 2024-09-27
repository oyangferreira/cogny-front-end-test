import useCartStore from '../../context/zustand';
import './index.css';
import Button from './../Button';

type CardProps = {
  item: {
    id: string; 
    description: string;
    price: number;
    image: string;
  };
};

const Card = ({ item }: CardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.description} />
      <p>{item.description}</p>
      <p className="price">R${item.price.toFixed(2)}</p>
      <Button onClick={handleAddToCart} />
    </div>
  );
};

export default Card;
