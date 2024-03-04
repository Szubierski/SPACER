import { motion } from "framer-motion"
import animations from '../../utils/framer'
import style from './search.module.css';

const Search = ({ view, setView }) => {
    const handleClick = () => {
        setView(prevValue => false);
    }

    return (
        <div className={view ? style.searchArea : style.searchAreaSmall}>
            <motion.input
                key={`${view}1`}
                className={view ? style.searchInput : style.searchInputSmall}
                type="text"
                name="search"
                placeholder="e.g. Moon"
                variants={animations.topEntryInput}
                initial="hidden"
                animate="visible"
            />
            <motion.button
                key={`${view}2`}
                onClick={handleClick}
                className={view ? style.searchButton : style.searchButtonSmall}
                type="button"
                name="search"
                placeholder="e.g. Moon"
                variants={animations.topEntryButton}
                initial="hidden"
                animate="visible"
            >
                Search
            </motion.button>
        </div>
    );
}

export default Search;