import React from 'react';
import { connect } from 'react-redux';
import { addAssignment, editAssignment, deleteAssignment } from '../actions/assignmentActions';
import Assignment from './Assignment';

class AssignmentList extends React.Component {
    render() {
        const assignments = this.props.assignments.map((assignment, i) => (<Assignment key={ i } assignment={ assignment } />));
        return (
            <div className="assignmentList">
                <button onClick={ this.handleAddButton.bind(this) }></button>
                { assignments } 
            </div>
        );
    }
    handleAddButton() {
        this.props.addAssignment(this.props.course); 
    }
}

function mapStateToProps(state, props) {
    const { assignments } = state;
    return {
        assignments: props.ids.map(id => assignments.entities[id])
    }
}
const mapDispatchToProps = {
    addAssignment,
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
