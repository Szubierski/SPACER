import { motion } from "framer-motion"
import animations from '../../utils/framer'
import style from './header.module.css';

const Header = () => {

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <div
            className={style.header}
        >
            <motion.p
                onClick={handleRefresh}
                className={style.headerText}
                variants={animations.topInVariant1}
                initial="hidden"
                animate="visible"
            >
                spacer
            </motion.p>
            <motion.input
                className={`${style.headerInput} ${style.scale}`}
                type="text"
                name="search"
                placeholder="e.g. Moon"
                variants={animations.topInVariant2}
                initial="hidden"
                animate="visible"
            />
        </div>
    );
}

export default Header;