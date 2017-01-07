import React, {Component} from 'react'
import TodoItem from './TodoItem.jsx'
import EditTodoForm from './EditTodoForm.jsx'

export default class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            editId: null,
            title: '',
            description: '',
            todos: [{id:0, title: "Walk moxie", description: "My cat moxie likes walks"}],
            count: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        this.addTodo(title, description);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleDelete(id) {
        let newTodos = this.state.todos.filter((t) => t.id !== id);
        this.setState({todos: newTodos});
    }

    handleEdit(id) {
        console.log("On edit called");
        this.setState({editId: id});
    }

    handleEditSubmit(id, title, description) {
        let todos = this.state.todos.slice();
        let todo = todos.find((t) => t.id === id);
        todo.title = title;
        todo.description = description;
        this.setState({editId: null, todos});
    }

    addTodo(title, description) {
        let newTodo = {id: this.state.count,
                       title: title,
                       description: description};

        let todos = this.state.todos.slice();
        todos.push(newTodo);
        this.setState({
            todos: todos,
            count: this.state.count + 1,
            title: '',
            description: ''
        });
    }

    render(){
        const list = this.state.todos.map((todo) => {
            if (todo.id === this.state.editId) {
                return (<li key={todo.id}>
                         <EditTodoForm id={todo.id}
                                       title={todo.title} 
                                       description={todo.description} 
                                       onSubmit={this.handleEditSubmit} />
                       </li>);
            }
            return <TodoItem key={todo.id}
                             id={todo.id}
                             title={todo.title}
                             description={todo.description}
                             onEdit={() => this.handleEdit(todo.id)}
                             onDelete={() => this.handleDelete(todo.id)} />;
        });
        return(

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title
                            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Description <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    <div>
                        To Do:
                        <ul>
                            {list}
                        </ul>
                    </div>
                </div>
            );
    }
}
