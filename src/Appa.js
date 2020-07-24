import React, {Component} from 'react'
import todosData from './todosData'
import TodoItem from './TodoItem'

/*

This is a completed TodoList App from the tutorial.



*/

class Appa extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        // console.log("Clickedz", id)
        this.setState(() => {
            const newTodo = todosData.map(item => {
                if (item.id === id)
                    item.completed = !item.completed

                return item
            })

            return{
                todos: newTodo
            }
        })
        
    }

    render() {
        
        const haha = this.state.todos.map(item => <TodoItem key={item.id} item={item} hC={this.handleChange}/>)
        
        return (
            <div>
                {haha}
            </div>
        )
    }
    
}

export default Appa