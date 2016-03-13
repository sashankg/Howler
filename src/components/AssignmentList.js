import React from 'react';
import { connect } from 'react-redux';
import 

class AssignmentList extends React.Component {
    render() {
        const assignments = this.props.assignments.map((assignments, i) => (<Assignment key={ i } assignment={ assignment } />));
        return (
            <div className="assignmentList">
                { assignments } 
            </div>

        );
    }
}

function mapStateToProps(state, props) {
    const { assignments } = state;
    return {
        assignments: props.ids.map(id => assignments.entities[id])
    }
}
const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
