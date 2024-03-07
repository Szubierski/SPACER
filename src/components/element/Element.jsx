import style from "./element.module.css";
import Modal from "../../views/modal/Modal";

const Element = ({ img, title, description, handleModalDisplay }) => {
    return (
        <div
            className={style.element}
            style={{ backgroundImage: `url(${img})` }}
            onClick={handleModalDisplay}
        >
            <Modal img={img} title={title} description={description} />
        </div>
    )
}

export default Element;