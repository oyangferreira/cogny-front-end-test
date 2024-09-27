import './index.css'

type ModalProps = {
  onConfirm: () => void,
  onCancel: () => void,
}

const Modal: React.FC<ModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirmar Compra</h2>
        <p>Deseja realmente finalizar a compra e limpar o carrinho?</p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default Modal