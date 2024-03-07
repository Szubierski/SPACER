import { motion } from "framer-motion";
import animations from '../../utils/framer'
import style from './gallery.module.css';
import Element from "../../components/element/Element";

const Gallery = ({ searchText, data }) => {

    const handleModalDisplay = (e) => {
        e.stopPropagation();
        e.currentTarget.firstChild.style.display = "block";
    }

    const info = data.map(item => (
        <Element
            key={item.data[0].nasa_id}
            img={item.links[0].href}
            title={item.data[0].title}
            description={item.data[0].description}
            handleModalDisplay={handleModalDisplay}
        />
    ))



    return (
        <div>
            <motion.h2
                variants={animations.topEntryText}
                initial="hidden"
                animate="visible"
            >
                {searchText}
            </motion.h2>
            <div className={style.gallery}>
                {info}
            </div>
        </div>

    );
}

export default Gallery;