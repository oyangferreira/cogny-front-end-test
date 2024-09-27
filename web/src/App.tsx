import useCartStore from './context/zustand';
import './App.css'
import Logo from './components/Logo';
import Cart from './components/Cart';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';



function App() {
  const [isCartScreen, setIsCartScreen] = useState<boolean>(false);
  const { count } = useCartStore();

  const toggleScreen = () => {
    setIsCartScreen((prevScreen) => !prevScreen);
    console.log(isCartScreen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <a onClick={toggleScreen}>
          <Cart count={count || 0} />
        </a>
      </header>
  
      {isCartScreen ? <CartScreen /> : <HomeScreen />}
    </div>
  )
}

export default App
