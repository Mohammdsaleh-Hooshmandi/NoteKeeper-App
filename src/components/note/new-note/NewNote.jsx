import styles from "./NewNote.module.css";
import { useState } from "react";

function NewNote (props) {
    const [enteredData, setEnteredData] = useState({ enteredTitle: "", enteredNote: "" });
    const [isValid, setIsValid] = useState(false);

    function titleChangeHandler (event) {
        setEnteredData(preData => { return {...preData, enteredTitle: event.target.value} });
    }
    function noteChangeHandler (event) {
        setEnteredData(preData => { return {...preData, enteredNote: event.target.value} });
    }
    function saveHandler () {
        props.onSave(enteredData);
        setEnteredData(preData => { return {...preData, enteredTitle: "", enteredNote: ""} });
    }

    function validateInputs () {
        if (enteredData.enteredNote.length < 1 || enteredData.enteredTitle.length < 1) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }

    return (
        <div className={styles.formWrapper}>
            <button type="button" className={styles.closeBtn} title="Close" onClick={props.onClick}>
                <i className="fa-solid fa-xmark"></i>
            </button>

            <form>
                <input
                    type="text"
                    className={styles.titleInput}
                    placeholder="Title"
                    value={enteredData.enteredTitle}
                    onChange={titleChangeHandler}
                    onInput={validateInputs}
                />
                <textarea
                    className={styles.noteInput}
                    placeholder="Note..."
                    value={enteredData.enteredNote}
                    onChange={noteChangeHandler}
                    onInput={validateInputs}
                />
            </form>

            <div>
                <button
                    type="button"
                    className={styles.addBtn}
                    onClick={saveHandler}
                    disabled={!isValid}
                    >
                        Add
                    </button>
            </div>
        </div>
    );
}

export default NewNote;