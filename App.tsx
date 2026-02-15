import React from 'react';
import Layout from './components/Layout';
import { ToastProvider } from './components/Toast';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <Layout />
    </ToastProvider>
  );
};

export default App;