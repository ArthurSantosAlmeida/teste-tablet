import PageHeader from "./components/PageHeader";
import Pastas from "./components/Pastas";
import RecentDocumentsSection from "./components/RecentDocumentsSection";
import styles from "./IADocumentos.module.css";

const UploadArea = () => (
  <section className={styles.uploadArea}>
    <img
      className={styles.uploadIcone}
      loading="lazy"
      alt=""
      src="/material-symbols-light-add-notes-outline@2x.png"
    />
    <p className={styles.uploadTitulo}>Arraste e solte seu arquivo aqui</p>
    <p className={styles.uploadSubtitulo}>ou clique para selecionar</p>
    <p className={styles.uploadFormatos}>
      Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 20MB)
    </p>
  </section>
);

const IADocumentos = () => (
  <div className={styles.iaDocumentos}>
    <PageHeader />
    <UploadArea />
    <Pastas />
    <RecentDocumentsSection />
  </div>
);

export default IADocumentos;
