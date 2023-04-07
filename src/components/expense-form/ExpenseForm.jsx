import { useState } from 'react'
import Form from '../UI/Form'
import Button from '../UI/button'
import './ExpenseForm.css'
function ExpenseForm({ expenseFunc,isShowButtonHandler }) {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [date, setDate] = useState(null)
	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	}
	const priceChangeHandler = (event) => {
		setPrice(event.target.value)
	}

	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}
	const cancelHandler = (event) => {
		event.preventDefault()
		isShowButtonHandler()
	}
	const sumbitHandler = (event) => {
		event.preventDefault()

		let data = {
			title,
			price,
			date,
		}
		if(title.length<0&&price.length<0&&date.length<0)
		expenseFunc(data)
		setTitle('')
		setPrice("")
		setDate("")
	}
	return (
		<form>
			<form className='form-control'>
				<div>
					<Form onChange={titleChangeHandler}
						value={title}
						labelName='Title'
						type='text'
						id='title'
						placeholder='Title' />
				</div>
				<div>
					<Form
						value={price}
						onChange={priceChangeHandler}
						labelName='Price'
						type='text'
						id='price' />
				</div>
				<div>
					<Form
						value={date}
						onChange={dateChangeHandler}
						labelName='Date'
						type='date'
						id='date'/>
				</div>
			</form>
			<div className='buttons'>
				<Button onClick={cancelHandler}>Отмена</Button>
				<Button onClick={sumbitHandler}>Добавить расходы</Button>
			</div>
		</form>
	)
}

export default ExpenseForm
