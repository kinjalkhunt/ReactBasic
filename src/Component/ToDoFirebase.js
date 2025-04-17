
import { getDatabase } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { app } from './FirbaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'

const db = getFirestore(app)

function ToDoFirebase() {
    const [task, setTask] = useState('')
    const [lists, setLists] = useState([]);

    const collectionRef = collection(db, 'todos')

    const fetchData = async () => {
        const docs = await getDocs(collectionRef);
        setLists(docs.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    const handleAdd = async () => {
        if(task.trim !== ''){
            await addDoc(collectionRef, {text: task});
            setTask('')
            fetchData()

        }

    }

    const handleDelete = async (id) => {
        const taskDoc = doc(db, 'todos', id)
        await deleteDoc(taskDoc)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>ToDoFirebase</h1>
            <br></br>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='enter your task'>

            </input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {lists.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={handleDelete}>Delete</button>
                    </li>

                ))}
            </ul>

        </div>
    )
}

export default ToDoFirebase
