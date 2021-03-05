const initialState = {
    modules: [
        {title: 'CS5610', _id: '123'},
        {title: 'CS3200', _id: '234'},
        {title: 'CS5200', _id: '345'}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newModule = {
                title: "new module",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    newModule
                ]
            }
        case "DELETE_MODULE":
        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module =>{
                    if(module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
        default:
            return state
    }
}

export default moduleReducer