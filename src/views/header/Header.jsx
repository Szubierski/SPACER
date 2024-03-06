import { motion, AnimatePresence } from 'framer-motion';
import animations from '../../utils/framer'
import style from './header.module.css';
import Search from "../../components/search/search";
import HeaderText from "../../components/headerText/HeaderText";

const Header = ({ view, setView, isVisible }) => (
    <AnimatePresence>
        {
            <motion.div
                key={`${view}header`}
                className={view ? style.header : style.headerSmall}
                variants={view ? animations.topEntryHeaderWelcome : animations.topEntryHeader}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
            >
                <HeaderText view={view} />
                <Search view={view} setView={setView} />
            </motion.div>
        }
    </AnimatePresence>
);

export default Header;