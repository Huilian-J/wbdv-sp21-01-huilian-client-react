import React, {useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleActions from "../../actions/module-actions";

const ModuleList = (
    {
        modules=[],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse,
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(()=> {
        findModulesForCourse(courseId)
    },[])
    return (
        <div>
            <ul className="list-group">
                {
                    modules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}
                            key={module._id}>
                            <EditableItem
                                to ={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                deleteItem={deleteModule}
                                updateItem={updateModule}
                                active={module._id === moduleId}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"></i>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
    updateModule: (newItem) => moduleActions.updateModule(dispatch, newItem),
    deleteModule: (moduleToDelete) => moduleActions.deleteModule(dispatch, moduleToDelete),
    findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
})

export default connect(stpm, dtpm)(ModuleList)