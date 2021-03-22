import React from 'react'

//state
import {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";

const WidgetList = () => {
    //TODO: move state management to widget-reducer
    const {topicId} = useParams();
    const[widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        //TODO: move server communication to widgets-service
        fetch(`https://wbdv-sp21-huilianj-server-java.herokuapp.com/api/topics/ABC234/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])
    const createWidgetForTopic = () => {
        fetch(`https://wbdv-sp21-huilianj-server-java.herokuapp.com/api/topics/ABC234/widgets`, {
            method: "POST",
            body: JSON.stringify({type: "HEADING", size:1, text: "New Widget"}),
            headers: {
                'content-type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(actualWidget => {
                setWidgets(widgets => ([...widgets, actualWidget]))
            })
    }
    const deleteWidget = (wid) =>
        fetch(`https://wbdv-sp21-huilianj-server-java.herokuapp.com/api/widgets/${wid}`, {
            method: "DELETE",
        }).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        })
    const updateWidget = (wid, widget) =>
        fetch(`https://wbdv-sp21-huilianj-server-java.herokuapp.com/api/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            setWidgets((widgets) => widgets.map(w => w.id !== wid? w : widget))
            setEditingWidget({})
        })
    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <>
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                            </>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}
export default WidgetList