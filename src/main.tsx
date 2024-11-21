import React from 'react'; // Importa React explícitamente
import { Header } from './components/Header'; // Ajusta la ruta según corresponda

const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export { Main };