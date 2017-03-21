import React, {Component} from 'react';
import {connect} from 'react-redux';

import Todo from './com-todo';
import {actionGetToDoList, actionFilterTodoList, actionAddNewTodo} from '../actions/action-todo';
import {actionActiveTodo} from '../actions/action-active-todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_text: ""
        };
    }

    mapTodo() {
        return this.props.todo_list.map((todo) => {
            return (<Todo key={todo.id} data={todo} onClick={() => this.handleTodoClick(todo)}/>);
        });
    }

    handleTodoClick(todo) {
        this.props.selectTodo(todo);
    }

    handleSearchChange(e) {
        if (!e.target.value) return this.props.getTodoList();
        this.props.filterTodoList(e.target.value);
    }

    handleAddBtnSave() {
        if (this.state.input_text) {
            this.props.addNewTodo(this.state.input_text);
            this.setState({input_text: ""});
        }
    }

    handleAddNewInputChange(e) {
        this.setState({input_text: e.target.value});
    }

    componentDidMount() {
        this.props.getTodoList();
    }

    render() {
        return (
            <div className="todo_content">
                <div className="todo_header">
                    <span>Todo Lists</span>
                </div>
                <div className="todo_search">
                    <input className="default_input" type="text" placeholder="Search for List"
                           onChange={(e) => {
                               this.handleSearchChange(e)
                           }}
                    />
                </div>
                <div className="todo_lists">
                    {this.mapTodo()}
                </div>
                <div className="todo_create_bar">
                    <div>
                        <input className="default_input" type="text" placeholder="Enter new list name"
                               value={this.state.input_text}
                               onChange={(e) => {
                                   this.handleAddNewInputChange(e)
                               }}
                        />
                    </div>
                    <div className="create_btn"
                         onClick={(e) => {
                             this.handleAddBtnSave();
                         }}
                    >
                        <span>+</span>
                    </div>
                </div>
            </div>
        );
    }
}

TodoList.propTypes = {
    active_todo: React.PropTypes.object,
    tasks: React.PropTypes.array,
    todo_list: React.PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list,
        active_todo: state.active_todo,
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodoList: () => {
            dispatch(actionGetToDoList());
        },
        filterTodoList: (text) => {
            dispatch(actionFilterTodoList(text));
        },
        addNewTodo: (title) => {
            dispatch(actionAddNewTodo(title));
        },
        selectTodo: (todo) => {
            dispatch(actionActiveTodo(todo));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);