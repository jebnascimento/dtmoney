import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";

interface INewTransactionModalProps {
  isOPen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOPen,
  onRequestClose,
}: INewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOPen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal"></img>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Entrada</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
