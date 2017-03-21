import React, {Component} from 'react';
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = "todo ";
        if (this.props.active_todo && this.props.data.id === this.props.active_todo.id) {
            classes += "active";
        }
        return (
            <div className={classes} onClick={this.props.onClick}>
                <span>{this.props.data.title}</span>
            </div>
        );
    }
}

Todo.propTypes = {
    active_todo: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        active_todo: state.active_todo
    };
};

export default connect(mapStateToProps)(Todo);
