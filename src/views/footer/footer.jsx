import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido com React e Vite <br />
        Dados fornecidos pela API do <a href="https://viacep.com.br/" target="_blank" rel="noreferrer">ViaCEP</a>
      </p>
    </footer>
  );
};