import React from 'react';

const Task = ({key, description}) => {
    return(
        <div className="form-check">
            <input key={key} className="form-check-input" type="checkbox" value="" id={key} />
            <label className="form-check-label" for="flexCheckDefault">
                {description}
            </label>
        </div>
    )
}

export default Task