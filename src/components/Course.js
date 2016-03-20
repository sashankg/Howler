import React from 'react';
import AssignmentList from './AssignmentList';

class Course extends React.Component {
    render() {
        const { id, name, assignments } = this.props.course;
        return (
            <div className="course">
                <span className="courseName">{ name }</span>
                <AssignmentList ids={ assignments } course={ id }/>
            </div> 
        );
    }
}

export default Course;
