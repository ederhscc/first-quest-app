import './App.css';
import Button from './components/button/button';
import TextColored from './components/text/text-colored';

const showLabel = (label) => {
  alert("A label desse botão é: " + label);
}

function App() {
  return (
    <>
      <TextColored/>
      <Button showLabel={showLabel} />
    </>    
  );
}

export default App;
