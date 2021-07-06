// import './App.css';
import React, {useState} from 'react';
import Modal from './components/Modal';

function App() {
  
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  }
  
  return (
    <div className="App">
    
      <button onClick={handleButtonClick}>Abrir modal</button>

      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Teste Modal</h1>
      </Modal>

    </div>
  );
}

export default App;
