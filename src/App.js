// import NavBar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import CardSection from "./components/CardSection";
// import Footer from "./components/Footer";
// import Testomonial from "./components/Testomonial";
// import CustomerForm from "./components/CustomerForm";


// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <HeroSection />
//       <CardSection />
//       <Testomonial/>
//       <Footer />
//       <CustomerForm/>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import './index.css';
import CustomerForm from './components/CustomerForm';
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Testomonial from "./components/Testomonial";


function App() {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  return (
    <div className="App">
      <NavBar />
       <HeroSection />
       <CardSection />
       <button onClick={handleFormToggle} className="CustomerButton" >Add Customer Details</button>
      <CustomerForm isOpen={isFormOpen} onClose={handleFormToggle} />

       <Testomonial/>
       <Footer />
     
      
    </div>
  );
}

export default App;



