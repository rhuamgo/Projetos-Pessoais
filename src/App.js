import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row, Column } from "./styles";
import { useState } from "react";

const App = () => {
  //definindo estado do input
  const [currentNumber, setCurrentNumber] = useState('0');
  
  const [firstNumber, setfirstNumber] = useState ('0');

  const [operation, setOperation] = useState('');

  //Limpando o console
  const heandClear = () => {
      setCurrentNumber('0')
      setfirstNumber('0')
      setOperation('')
    
  }
  //Console
  const handleAddNumber = (num) => {
    //mudando console do input e validando para não ficar sempre zero (n ficar somando com 0)
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}` )
  }

//função soma
  const heandleSumNumbers = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else{
     
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setfirstNumber('0')
      setOperation('')
    }
     }

    //função de subritação
    const heandleMinusNumbers = () => {

      if(firstNumber === '0'){
        setfirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
      }else{
       
        const rem = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(rem))
        setfirstNumber('0')
        setOperation('')
      }

  }
  //função para multiplicar 
  const heandleMultiplyNumber = () => {

    if(firstNumber ==='0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    }else{

      const muliply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(muliply))
      setfirstNumber('0')
      setOperation('')
    }
  }

  const heandleDivideNumber = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('%')
    }else{

      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
    }

  }

//função do '=' para chamar o resultado das operações
  const heandlEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          heandleSumNumbers();
          break;
          case '-':
          heandleMinusNumbers();
          break;
          case 'x':
            heandleMultiplyNumber();
          break;
          case '%':
            heandleDivideNumber();
          break;
        default:
           break;
      }
     
    }
  }

  return (
   <Container>
    <Content>
      <Input value={currentNumber}/>
      <Row>
      <Button label="0" onClick={() => handleAddNumber('0')}/>
      <Button label="%" onClick={heandleDivideNumber}/>
      <Button label="c" onClick={ heandClear }/>
      <Button label="x" onClick={heandleMultiplyNumber}/>
      </Row> 
      <Row>
      <Button label="7" onClick={() => handleAddNumber('7')}/>
      <Button label="8" onClick={() => handleAddNumber('8')}/>
      <Button label="9" onClick={() => handleAddNumber('9')}/>
      <Button label="-" onClick={heandleMinusNumbers}/>
      </Row>
      <Row>
      <Button label="4" onClick={() => handleAddNumber('4')}/>
      <Button label="5" onClick={() => handleAddNumber('5')}/>
      <Button label="6" onClick={() => handleAddNumber('6')}/>
      <Button label="+" onClick={heandleSumNumbers}/>
      </Row>
      <Row>
      <Button label="1" onClick={() => handleAddNumber('1')}/>
      <Button label="2" onClick={() => handleAddNumber('2')}/>
      <Button label="3" onClick={() => handleAddNumber('3')}/>
      <Button label="=" onClick={heandlEquals}/>
      </Row>
      <Column></Column>
     
    </Content>
    
   </Container>
  );
}

export default App;
