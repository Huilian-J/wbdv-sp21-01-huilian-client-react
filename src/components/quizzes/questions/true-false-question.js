import React from 'react'

const TrueFalseQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question}</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <label>
                        <input type="radio" name={question._id} className="mr-1"/>
                        True
                    </label>
                </li>
                <li className="list-group-item">
                    <label>
                        <input type="radio" name={question._id} className="mr-1"/>
                        False
                    </label>
                </li>
            </ul>
            <h6 className="mt-2">Your answer: {question.correct}</h6>
            <button className="btn btn-success mb-3">Grade</button>
        </div>
    )
}

export default TrueFalseQuestion