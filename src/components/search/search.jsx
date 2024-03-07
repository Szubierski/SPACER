import { motion } from "framer-motion"
import animations from '../../utils/framer'
import style from './search.module.css';

const Search = ({ view, setView, setSearchText, handleButtonClick, searchText }) => {
    const handleClick = () => {
        const inputValue = document.querySelector("input[type=text]").value || "Moon";
        setSearchText(prevValue => prevValue = inputValue);
        if (view) {
            setView(prevValue => prevValue = false);
        }
        handleButtonClick();
    }

    const enterKeyCheck = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }
    }

    return (
        <div className={view ? style.searchArea : style.searchAreaSmall}>
            <motion.input
                type="text"
                name="search"
                placeholder="e.g. Moon"
                className={view ? style.searchInput : style.searchInputSmall}
                key={`${view}1`}
                variants={animations.topEntryInput}
                initial="hidden"
                animate="visible"
                onKeyUp={enterKeyCheck}
            />
            <motion.button
                type="button"
                name="searchBtn"
                placeholder="e.g. Moon"
                className={view ? style.searchButton : style.searchButtonSmall}
                onClick={handleClick}
                key={`${view}2`}
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