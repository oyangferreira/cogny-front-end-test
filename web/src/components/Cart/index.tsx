import './index.css'

type CartProps = {
  count: number
}

const Cart: React.FC<CartProps> = ({ count }) => {
  return (
    <div className="cart">
      <h2>Meu carrinho</h2>
      <p>{count == 0 ? 'nenhum' : count} {count == 0 ? "item" : "itens"}</p>
    </div>
  )
}

export default Cart