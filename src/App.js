import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState("0");
  const [operator, setOperator] = useState('');

  // Adicionar número
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  // Backspace
  const handleBackspace = () => {
    setCurrentNumber(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return '0';
    });
  }

  // Limpar a calculadora
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber(null)
    setOperator('');
  }

  // Configura operador e armazena número atual
  const handleOperator = (op) => {
    if (firstNumber === null) {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperator(op);
    } else {
      // Realiza a operação com o número anterior
      handleEquals();
      setOperator(op);
    }
  }

  //Soma
  const handleSumNumbers = () => {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setFirstNumber(null);
    setOperator('');
  };

  //Subtração
  const handleSubtractNumbers = () => {
    const sub = Number(firstNumber) - Number(currentNumber);
    setCurrentNumber(String(sub));
    setFirstNumber(null);
    setOperator('');
  };

  //Multiplicação
  const handleMultiplyNumbers = () => {
    const multiply = Number(firstNumber) * Number(currentNumber);
    setCurrentNumber(String(multiply));
    setFirstNumber(null);
    setOperator('');
  };

  //Divisão
  const handleDivideNumbers = () => {
    const divide = Number(firstNumber) / Number(currentNumber);
    setCurrentNumber(String(divide));
    setFirstNumber(null);
    setOperator('');
  };

  // Porcentagem
  const handlePercentageNumbers = () => {
    const percentage = Number(currentNumber) / 100;
    setCurrentNumber(String(percentage));
  };

  // Igual
  const handleEquals = () => {
    if (firstNumber !== null && operator !== '' && currentNumber !== '0') {
      switch (operator) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubtractNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="←" onClick={handleBackspace} />
          <Button label="%" onClick={handlePercentageNumbers} />
          <Button label="÷" onClick={() => handleOperator('/')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="×" onClick={() => handleOperator('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleOperator('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleOperator('+')} />
        </Row>
        <Row>
          <Button label=" " onClick={() => handleAddNumber('0')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
