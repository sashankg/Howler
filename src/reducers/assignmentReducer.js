function Assignment(id, course, text="", dueDate=new Date(), completed=false) {
    this.id = id;
    this.course = course;
    this.text = text;
    this.dueDate = dueDate;
}
export default function assignmentReducer(state={ array: [], entities: {} }, action) {
    switch(action.type) {
    case 'ADD_ASSIGNMENT': {
        const array = state.array.concat(action.id);
        return {
            array,
            entities: array.reduce((object, id) => {
                if(state.entities[id]) {
                    object[id] = state.entities[id];
                }
                else {
                    object[id] = new Assignment(id, action.course);
                }
                return object;
            }, {})
        }
    } 
    case 'EDIT_ASSIGNMENT': {
        const array = state.array
        return {
            array,
            entities: array.reduce((object, id) => {
                if(id == action.id) {
                    object[id] = action.data;
                }
                else {
                    object[id] = state.entities[id];
                }
                return object;
            })
        }
    }
    case 'DELETE_ASSIGNMENT': {
        const index = state.array.indexOf(action.id);
        const array = state.array.slice(0, index).append(state.array.slice(index+1));
        return {
            array,
            entities: array.reduce((object, id) => {
                object[id] = state.entities[id];
                return object;
            }, {})
        }
    }
    default: return state;
    }
}
