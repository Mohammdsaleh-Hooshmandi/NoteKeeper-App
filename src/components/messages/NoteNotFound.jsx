import styles from "./NoteNotFound.module.css";

function NoteNotFound () {

    return (
        <li>
            <div className={styles.icon}>🤷‍♂️</div>
            <div className={styles.contents}>
                <h1>We can't find any note for you</h1>
                <h2>add new note</h2>
            </div>
        </li>
    );
}

export default NoteNotFound;