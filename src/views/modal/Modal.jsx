import style from "./modal.module.css";
import Close from "../../components/close/Close"
import parse from 'html-react-parser';

const Modal = ({ img, title, description }) => {
    return (
        <div className={style.modal} >
            <div className={style.container}>
                <img src={img} alt={title} />
                <div className={style.text}>
                    <h3>{title}</h3>
                    {description == undefined ? null : parse(`${description}`)}
                </div>
                <Close />
            </div>
        </div>
    )
}

export default Modal;