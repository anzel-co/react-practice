import React from "react";

const Modal = props => {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="modalButton" onClick={props.onConfirmHandler}>CONFIRM</button>
            <button className='modalButton'onClick={props.onCancelHandler}>CANCEL</button>
        </div>
    )
}

export default Modal