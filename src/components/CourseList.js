import React from 'react';
import { connect } from 'react-redux';
import { addCourse, editCourse, deleteCourse } from '../actions/courseActions';
import Course from './Course';

class CourseList extends React.Component {
    render() {
        const courses = this.props.courses.map( (course, i)  => (<Course key={ i } course={ course } />));
        return (
            <div className="courseList">
                <button onClick={ this.handleAddButton.bind(this) }></button>
                { courses }
            </div>
        );
    }

    handleAddButton(event) {
        this.props.addCourse();
    }
}

function mapStateToProps(state) {
    const { courses } = state
    console.log(courses);
    return {
        courses: courses.array.map(id => courses.entities[id])
    }
}

const mapDispatchToProps = {
    addCourse,
    editCourse,
    deleteCourse
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
