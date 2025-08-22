import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Enquires from '../components/Enquires';
import './EnquiresPage.css';

const EnquiresPage = () => {
  return (
    <div className="enquires-page">
      <Header />
      <main>
        <Enquires />
      </main>
      <Footer />
    </div>
  );
};

export default EnquiresPage;
