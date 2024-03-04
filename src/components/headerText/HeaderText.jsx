import { motion } from "framer-motion"
import animations from '../../utils/framer'
import style from './headerText.module.css';

const HeaderText = ({ view }) => {

    const handleRefresh = () => {
        window.location.reload();
    }

    return (
        <motion.p
            onClick={handleRefresh}
            className={view ? style.headerText : style.headerTextSmall}
            key={`${view}1`}
            variants={animations.topEntryText}
            initial="hidden"
            animate="visible"
        >
            spacer
        </motion.p >
    );
}

export default HeaderText;