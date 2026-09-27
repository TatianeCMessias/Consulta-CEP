import { Header } from '../header/header'; 
import { Footer } from '../footer/footer'; 

import { useCepController } from '../../controllers/useCepController'; 
import styles from './CepView.module.css'; 

export const CepView = () => {
  const { cep, handleCepChange, address, error, loading, handleSearch } = useCepController();

  return (
    <div className={styles.pageWrapper}>
      
      <Header />

      <main className={styles.container}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={cep}
            onChange={handleCepChange}
            placeholder="00000-000"
            maxLength="9"
            className={styles.searchInput}
          />
          <button type="submit" disabled={loading} className={styles.searchButton}>
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}

        {address && (
          <div className={styles.resultCard}>
            <p><strong>Logradouro:</strong> {address.logradouro}</p>
            <p><strong>Bairro:</strong> {address.bairro}</p>
            <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
            <p><strong>DDD:</strong> {address.ddd}</p>
          </div>
        )}
      </main>

      <Footer />
      
    </div>
  );
};