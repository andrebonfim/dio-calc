import { ButtonContainer } from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label.trim() ? label : '\u00A0'}{/* caso o botão esteja sem conteúdo */}
    </ButtonContainer>
  );
}

export default Button;