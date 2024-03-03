import style from './footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <p>Author: <a href="https://github.com/Szubierski" target="_blank" rel="noreferrer" className={style.fLink}>Nikodem Szubierski</a></p>
        </div>
    );
}

export default Footer;