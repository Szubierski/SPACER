import { motion } from "framer-motion"
import animations from '../../utils/framer'
import style from './footer.module.css';

const Footer = () => {
    return (
        <div
            className={style.footer}
        >
            <motion.p
                className={style.footerText}
                variants={animations.bottomEntryText}
                initial="hidden"
                animate="visible"
            >
                Author: <a href="https://github.com/Szubierski" target="_blank" rel="noreferrer" className={style.fLink}>Nikodem Szubierski</a>
            </motion.p>
        </div>
    );
}

export default Footer;