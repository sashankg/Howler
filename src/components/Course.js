import React from 'react';
import AssignmentList from './AssignmentList';

class Course extends React.Component {
    render() {
        const { name, assignments } = this.props.course;
        return (
            <div className="course">
                { name }
                <AssignmentList ids={ assignments }/>
            </div> 
        );
    }
}

export default Course;
