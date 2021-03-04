import React from 'react'
import {connect} from "react-redux"

const LessonTabs = (
    {
        lessons=[]
    }) =>
    <div>
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-iem">
                        <a class="nav-link" href="#">{lesson.title}</a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {}

export default connect(stpm, dtpm)(LessonTabs)