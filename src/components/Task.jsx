import React from 'react';

const Task = ({ description }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label" htmlFor="flexCheckDefault" >
                {description}
            </label>
        </div>
    )
}

export default Task