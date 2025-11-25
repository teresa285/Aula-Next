import styles from './Footer.module.css';

export default function footer() {
    const anoAtual = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
        <p>
           &copy; {anoAtual} Insitituto Federal da Paraíba (IFPB).
           Todos os direitos reservados.
           <br/> Desenvolvido para fins didáticos por Ana Teresa. </p>
        </footer>
    )
}