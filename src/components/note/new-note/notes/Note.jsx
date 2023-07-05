import styles from "./Note.module.css";

function Note (props) {

    return (
        <li>
            <div className={styles.note}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.body}>{props.body}</p>
            </div>
        </li>
    );
}

export default Note;