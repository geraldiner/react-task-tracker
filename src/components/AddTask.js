import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please enter a task description')
      return
    }
    onAdd({ text: text, date: date, reminder: reminder })
    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit} >
      <section className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Task Description' value={text} onChange={(e) => setText(e.target.value)} />
      </section>
      <section className='form-control'>
        <label>Date & Time </label>
        <input type='text' placeholder='Date & Time' value={date} onChange={(e) => setDate(e.target.value)} />
      </section>
      <section className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </section>
      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask
