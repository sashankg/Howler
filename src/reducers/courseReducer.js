function Course(id, text="", dueDate=(new Date())) {
    this.id = id;
    this.text = text;
    this.dueDate = dueDate;
}
export default function courseReducer(state = {array: [], entities: {}}, action) {
    switch(action.type) {
    case 'ADD_COURSE': {
        const id = new Date().getTime();
        const array = state.array.concat(id);
        return {
            array,
            entities: array.reduce((object, id) => {
                if(state.entities[id]) {
                    object[id] = state.entities[id];
                }
                else {
                    object[id] = new Course(id);
                }
                return object;
            }, {})
        }
    }
    case 'EDIT_COURSE': {
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
    default: return state;

    }
}
