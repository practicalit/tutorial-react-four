import './App.css';

import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Content />
        <Footer />
    </Container>
   </div>
  );
}

export default App;
