import { useState } from "react";
import useCartStore from "../../context/zustand"
import './index.css'
import Modal from "../../components/Modal"; 

const CartScreen = () => {
  const { items, clearCart, updateQuantityItem } = useCartStore();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const groupedItems = items.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, [] as Array<{ id: string, description: string, price: number, image: string, quantity: number }>);

  const calculateTotal = () => {
    return groupedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleConfirmPurchase = () => {
    clearCart(); 
    setModalVisible(false);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantityItem(id, newQuantity);
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <div>
          <h2>Produto</h2>
        </div>
        <div>
          <h2>QTD</h2>
          <h2>Preço</h2>
        </div>
      </header>
      <div className="cart-items">
        {groupedItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div>
              <img src={item.image} alt={item.description} />
              <p>{item.description}</p>
            </div>
            <div className="input">
              <input 
                type="number" 
                min="1" 
                value={item.quantity || 1} 
                onChange={(e) => handleQuantityChange(e, item.id)} 
              />
              <p>R${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="cart-footer">
        <div>
          <button className="checkout-button" onClick={() => setModalVisible(true)}>Finalizar Pedido</button>
        </div>
        <div>
          <h2>Total</h2>
          <p>R$ {calculateTotal().toFixed(2)}</p>
        </div>
      </footer>

      {modalVisible && (
        <Modal onConfirm={handleConfirmPurchase} onCancel={() => setModalVisible(false)} />
      )}
    </div> 
  )
}

export default CartScreen