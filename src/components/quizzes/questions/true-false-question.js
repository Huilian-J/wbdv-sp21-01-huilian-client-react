import React, {useState} from 'react'

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [grade, setGrade] =useState(false)
    return(
        <div>
            <div className="row">
                <h4 className="ml-3">{question.question}</h4>
                {
                    grade &&
                    <div className="ml-2 mt-1">
                        {
                            question.correct === answer &&
                            <i className="fas fa-check"></i>
                        }
                        {
                            question.correct !== answer &&
                            <i className="fas fa-times"></i>
                        }
                    </div>
                }
            </div>
            <ul className="list-group">
                <li
                    className={`list-group-item 
                    ${grade && question.correct === "true"? "list-group-item-success" : ""}
                    ${grade && question.correct !== "true" && answer !== question.correct? "list-group-item-danger" : ""}`}>
                    <label>
                        <input
                            onClick={() => setAnswer("true")}
                            type="radio" name={question._id} className="mr-1"/>
                        True
                    </label>
                </li>
                <li
                    className={`list-group-item 
                    ${grade && question.correct === "false"? "list-group-item-success" : ""}
                    ${grade && question.correct !== "false" && answer !== question.correct? "list-group-item-danger" : ""}`}>
                    <label>
                        <input
                            onClick={() => setAnswer("false")}
                            type="radio" name={question._id} className="mr-1"/>
                        False
                    </label>
                </li>
            </ul>
            <h6 className="mt-2">Your answer: {answer}</h6>
            <button
                onClick={() => setGrade(true)}
                className="btn btn-success mb-3">
                Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion