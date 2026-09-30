import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, editTodo } from '../Redux/Slices/TodoSlice'

function Alltodos() {

  const [todo, setTodo] = useState('')
  const [editId, setEditId] = useState(null)

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todo)


  // Add Todo
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


  // Edit Todo
  const handleEditTodo = (item) => {

    setTodo(item.title)
    setEditId(item.id)

  }


  // Update Todo
  const handleUpdateTodo = () => {

    if (todo.trim() === '') {
      alert('Please enter a todo')
      return
    }

    dispatch(editTodo({
      id: editId,
      title: todo
    }))

    setTodo('')
    setEditId(null)
  }


  // Delete Todo
  const handleDeleteTodo = (id) => {

    dispatch(removeTodo(id))

  }


  return (
    <div className="container py-5" style={{ minHeight: '75vh' }}>

      {/* Heading */}
      <div className="text-center mb-5">

        <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: '#ede9fe', color: '#6d28d9' }} >
          TASK MANAGEMENT
        </span>

        <h2 className="fw-bold mb-2" style={{ color: '#312e81' }}>My Todo App </h2>

        <p className="text-muted"> Manage your daily tasks easily</p>

      </div>


      {/* Add Todo */}
      <div className="card border-0 shadow-sm p-4 mb-4" style={{ borderRadius: '16px' }} >

        <h5 className="fw-bold mb-3" style={{ color: '#312e81' }} >
          {editId ? 'Edit Todo' : 'Add New Todo'}
        </h5>

        <div className="input-group">

          <input type="text" className="form-control border-0" placeholder="Enter your task" value={todo} onChange={(e) => setTodo(e.target.value)} style={{ background: '#f8f7ff', padding: '13px 15px' }} />

          {editId ? (

            <button className="btn text-white px-4 fw-semibold" onClick={handleUpdateTodo} style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)' }} >
              Update Todo
            </button>

          ) : (

            <button className="btn text-white px-4 fw-semibold" onClick={handleAddTodo} style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }} >
              Add Todo
            </button>

          )}

        </div>

      </div>


      {/* Todo List */}
      <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }} >

        <div className="card-header text-white border-0 p-4" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }} >

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h5 className="mb-1 fw-bold">
                My Tasks
              </h5>

              <small className="text-white-50">
                Manage your tasks
              </small>

            </div>

            <span className="badge bg-white rounded-pill px-3 py-2" style={{ color: '#5b21b6' }} >
              {todos.length} Tasks
            </span>

          </div>

        </div>


        <div className="card-body p-0">

          {todos.length === 0 ? (

            // No Todo
            <div className="text-center py-5">

              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: '65px', height: '65px', background: '#ede9fe', color: '#7c3aed', fontSize: '25px' }} >
                ✓
              </div>

              <h6 className="fw-semibold" style={{ color: '#374151' }} >
                No todos available
              </h6>

              <p className="text-muted mb-0">
                Add your first task above
              </p>

            </div>

          ) : (

            // Display Todos
            todos.map((item, index) => (

              <div
                key={item.id}
                className={`d-flex justify-content-between align-items-center px-4 py-3 ${index !== todos.length - 1
                    ? 'border-bottom'
                    : ''
                  }`}
              >

                {/* Todo Details */}
                <div>

                  <h6 className="mb-1 fw-semibold" style={{ color: '#1f2937' }} >
                    {item.title}
                  </h6>

                  <small className="text-muted">
                    Todo #{index + 1}
                  </small>

                </div>


                {/* Edit and Delete Buttons */}
                <div>

                  <button className="btn btn-sm me-2 px-3 fw-semibold" onClick={() => handleEditTodo(item)}
                    style={{ background: '#fef3c7', color: '#b45309', border: 'none', borderRadius: '8px' }} >
                    Edit
                  </button>

                  <button className="btn btn-sm px-3 fw-semibold" onClick={() => handleDeleteTodo(item.id)}
                    style={{ background: '#fee2e2', color: '#dc2626', border: 'none', borderRadius: '8px' }}>
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