
import './App.css';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';
import Order from './components/Order';
import New from './components/New'
function App() {
  return (
  <>
  <Navbar></Navbar> 
  <BookTable></BookTable><Order></Order><New></New>
  </>
  );
}
  
export default App;
