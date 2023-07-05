import styles from "./Note.module.css";

function Note (props) {

    function removeClickHandler () {
        props.onRemove(props.id);
    }

    return (
        <li>
            <div className={styles.note}>
                <button type="button" className={styles.removeBtn} onClick={removeClickHandler}>
                    <i className="fa-solid fa-trash"></i>
                </button>

                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.body}>{props.body}</p>
            </div>
        </li>
    );
}

export default Note;