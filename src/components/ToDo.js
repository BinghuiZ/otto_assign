import React, { useState, useEffect } from 'react'

import { Form, Input, Divider, Checkbox, Button } from 'semantic-ui-react'

const ToDo = () => {
    const [todoList, setTodoList] = useState([])
    const [typedWord, setTypedWord] = useState('')

    const handleSubmit = (e) => {
        console.log(`submited   :   ${typedWord}`)
        e.preventDefault()
        let todo = { toDoText: typedWord, done: false }
        console.log(todo)
        let copiedList = [...todoList]
        copiedList.push(todo)
        setTodoList(copiedList)
        setTypedWord('')
        console.log(todoList)
    }

    const toggleCheckBox = (index) => {
        let copiedList = [...todoList]
        copiedList[index].done = !copiedList[index].done
        setTodoList(copiedList)
    }

    const deleteButtonClicked = (index) => {
        let copiedList = [...todoList]
        copiedList.splice(index, 1)
        setTodoList(copiedList)
    }

    const getToDoViews = () => {
        console.log('getToDoViews', todoList)
        return todoList.map((todo, index) => {
            return (
                <div key={index}>
                    <Checkbox checked={todo.done} onClick={toggleCheckBox(index)} /> {todo.toDoText} <Button icon='delete' size='mini' onClick={deleteButtonClicked(index)} />
                </div>
            )
        })
    }

    return (
        <div>
            <h1>TODO</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <Input icon='add' placeholder='Add New Todo' value={typedWord} onChange={(e, d) => {
                        setTypedWord(d.value)
                    }} />
                </Form.Field>
            </Form>
            <Divider />

            <div>
                {getToDoViews()}
            </div>
        </div>
    )
}

export default ToDo;
