import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, editTodo } from '../Redux/Slices/TodoSlice'

function Alltodos() {

  const [todo, setTodo] = useState('')
  const [editId, setEditId] = useState(null)

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todo)

  // add todo
  const handleAddTodo = () => {

    if (todo.trim() === '') {
      alert('Please enter a todo')
      return
    }

    const newTodo = {
      id: Date.now(),
      title: todo
    }

    dispatch(addTodo(newTodo))

    setTodo('')
  }

  // edit todo
  const handleEditTodo = (item) => {

    setTodo(item.title)
    setEditId(item.id)

  }

  // update todo
  const handleUpdateTodo = () => {

    if (todo.trim() === '') {
      alert('Please enter a todo')
      return
    }

    dispatch(
      editTodo({
        id: editId,
        title: todo
      })
    )

    setTodo('')
    setEditId(null)
  }

  // delete todo
  const handleDeleteTodo = (id) => {

    dispatch(removeTodo(id))

  }

  return (
    <div className="container py-5">

      {/* heading */}
      <div className="text-center mb-4">

        <h2 className="fw-bold">
          My Todo App
        </h2>

        <p className="text-muted">
          Manage your daily tasks easily
        </p>

      </div>


      {/* add todo */}
      <div className="card shadow-sm p-4 mb-4">

        <h5 className="mb-3">
          {editId ? 'Edit Todo' : 'Add New Todo'}
        </h5>

        <div className="input-group">

          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          {editId ? (

            <button
              className="btn btn-success"
              onClick={handleUpdateTodo}
            >
              Update Todo
            </button>

          ) : (

            <button
              className="btn btn-primary"
              onClick={handleAddTodo}
            >
              Add Todo
            </button>

          )}

        </div>

      </div>


      {/* todo list */}
      <div className="card shadow-sm">

        <div className="card-header bg-primary text-white">

          <h5 className="mb-0">
            My Tasks ({todos.length})
          </h5>

        </div>


        <div className="card-body">

          {todos.length === 0 ? (

            <div className="text-center py-4">

              <h6 className="text-muted">
                No todos available
              </h6>

              <p className="text-muted mb-0">
                Add your first task above
              </p>

            </div>

          ) : (

            todos.map((item, index) => (

              <div
                key={item.id}
                className={`d-flex justify-content-between align-items-center py-3 ${
                  index !== todos.length - 1
                    ? 'border-bottom'
                    : ''
                }`}
              >

                {/* todo details */}
                <div>

                  <h6 className="mb-1">
                    {item.title}
                  </h6>

                  <small className="text-muted">
                    Todo #{index + 1}
                  </small>

                </div>


                {/* buttons */}
                <div>

                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEditTodo(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  )
}

export default Alltodos