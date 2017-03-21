import React, {Component} from 'react';
import {connect} from 'react-redux';

import Task from './com-task';
import {actionMarkTaskAsDone, actionAddNewTask} from '../actions/action-task';

class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_text: ""
        };
    }

    mapTasks() {
        return this.props.tasks.sort().sort((a, b) => {
            return (a.done === b.done) ? 0 : a.done ? 1 : -1;
        }).map((task) => {
            return (<Task key={task.id} data={task} onChange={(e) => {
                this.taskChangeHandler(task);
            }}/>);
        });
    }

    taskChangeHandler(task) {
        this.props.markAsDone(task);
    }

    handleAddNewInputChange(e) {
        this.setState({input_text: e.target.value});
    }

    handleAddBtnSave() {
        if (this.state.input_text) {
            let task = {
                id: Math.random() * 9999999,
                todo_id: this.props.todo.id,
                title: this.state.input_text
            };
            this.props.addNewTask(task);
            this.setState({input_text: ""});
        }
    }

    render() {
        if (this.props.todo) {
            let todo = this.props.todo;
            let tasks = this.props.tasks;
            let dones = tasks.filter((item) => item.done);
            debugger;

            return (
                <div className="tasks_content">
                    <div className="tasks_header">
                        <div className="task_name">
                            {todo.title}
                        </div>
                        <div className="tasks_count">{dones.length} of {tasks.length}</div>
                    </div>
                    <div className="tasks">
                        {this.mapTasks()}
                    </div>
                    <div className="tasks_footer">
                        <div>
                            <input className="default_input" type="text" placeholder="Enter new Todo"
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
        } else {
            return (
                <div className="tasks_content">
                    <div className="tasks_header">
                        <div className="task_name">
                            Please select a task
                        </div>
                    </div>
                </div>
            );
        }
    }
}

TasksList.propTypes = {
    active_todo: React.PropTypes.object,
    tasks: React.PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        todo: state.active_todo,
        tasks: ((state) => {
            if (!state.active_todo) return [];
            return state.tasks.filter((item) => item.todo_id === state.active_todo.id);
        })(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        markAsDone: (task) => {
            dispatch(actionMarkTaskAsDone(task));
        },
        addNewTask: (task) => {
            dispatch(actionAddNewTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
