import { useState } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import allNote from "./Data";
import Note from "./components/note/new-note/notes/Note";
import AddButton from "./components/note/new-note/add-button/AddButton";
import NewNote from "./components/note/new-note/NewNote";

function App() {
	const [data, setNewData] = useState(allNote);
	const [addNewNote, setAddNewNote] = useState(false);

	function saveHandler (newNote) {
		const note = {
			title: newNote.enteredTitle,
			note: newNote.enteredNote,
			id: "note-" + (data.length + 1)
		}

		setNewData(preData => [...preData, note])
	}
	function openNewNoteHandler () {
		setAddNewNote(true)
	}
	function closeNewNoteHandler () {
		setAddNewNote(false)
	}
	
	return (
		<div className="container">
			<Header />
			{addNewNote ? <NewNote onSave={saveHandler} onClick={closeNewNoteHandler}/> : <AddButton onClick={openNewNoteHandler}/>}
			<ul className="notes-wrapper">
				{data.map(note => <Note key={note.id} title={note.title} body={note.note}/>)}
			</ul>
			<Footer />
		</div>
	);
}

export default App;