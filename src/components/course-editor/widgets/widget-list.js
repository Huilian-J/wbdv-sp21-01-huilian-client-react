import React from 'react'

//state
import {useState, useEffect} from 'react'

const WidgetList = () => {
    // state => Reducer - widget-reducer
    const[widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch("https://wbdv-sp21-huilianj-server-java.herokuapp.com/api/widgets")
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [])
    //service => move to right file place
    return(
        <div>
            <h2>Widget List({widgets.length})</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {widget.type}
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}
export default WidgetList