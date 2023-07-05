import styles from "./AddButton.module.css";

function AddButton (props) {

    return (
        <div className={styles.wrapper}>
            <button type="button" className={styles.btn} onClick={props.onClick}>
                <i className="fa-sharp fa-solid fa-pencil"></i>
            </button>
        </div>
        );
}

export default AddButton;