import React, {useState} from 'react'

const ImageWidget = ({widget, deleteWidget, updateWidget}) => {
    const[w, setWidget] = useState(widget);
    const [editing, setEditingWidget] = useState(false);

    return(
        <>
            <div className="row">
                <div className="col-11">
                    {
                        editing &&
                            <>
                                <input
                                    onChange={(e) => {
                                        setWidget({...widget, src: e.target.value})
                                    }}
                                    value={w.src}
                                    className="form-control"/>
                                <input
                                    onChange={(e) => {
                                        setWidget({...widget, width: e.target.value})
                                    }}
                                    value={w.width}
                                    className="form-control"/>
                                <input
                                    onChange={(e) => {
                                        setWidget({...widget, height: e.target.value})
                                    }}
                                    value={w.height}
                                    className="form-control"/>
                            </>

                    }
                    {
                        !editing &&
                            <img
                                width={widget.width}
                                height={widget.height}
                                src={widget.src}/>
                    }
                </div>
                <div className="col-1">
                    {
                        editing &&
                        <>
                            <i
                                onClick={() => {
                                    updateWidget(widget.id, w)
                                    setEditingWidget(false)
                                }}
                                className="fas fa-check float-right"></i>
                            <i onClick={() => {
                                deleteWidget(widget.id)
                                setEditingWidget(false)
                            }} className="fas mr-2 fa-trash float-right"></i>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            <i
                                onClick={() => setEditingWidget(true)}
                                className="fas fa-cog float-right">
                            </i>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default ImageWidget