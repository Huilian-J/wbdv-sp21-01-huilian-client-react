import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import {findModulesForCourse} from "../../services/module-service"

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(()=> {
        findModulesForCourse(courseId)
    },[])
    return (
        <div>
            <h2>Module List</h2>
            <ul>
                <li>layout: {layout}</li>
                <li>course: {courseId}</li>
                <li>module: {moduleId}</li>
            </ul>
            <ul className="list-group">
                {
                    modules.map(module =>
                        <li className="list-group-item">
                            <EditableItem
                                to ={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                deleteItem={deleteModule}
                                updateItem={updateModule}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={createModule} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE", updateModule: newItem})
    },
    deleteModule: (itemToDelete) => {
        dispatch({type: "DELETE_MODULE", moduleToDelete: itemToDelete})
    },
    findModulesForCourse: (courseId) => {
        findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    }
})

export default connect(stpm, dtpm)(ModuleList)