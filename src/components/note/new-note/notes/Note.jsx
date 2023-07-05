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

                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
                
                <div className={styles.body}>
                    <p>{props.body}</p>
                </div>
            </div>
        </li>
    );
}

export default Note;