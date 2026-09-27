import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Consulta de Endereço</h1>
      <p>Digite o CEP para encontrar informações completas</p>
      
    </header>
  );
};