// src/components/Task.js

import React from "react";
import PropTypes from "prop-types";
import "../index.css";

export interface Task {
    id: string;
    title: string;
    state: string;
    updatedAt: Date;
}
export interface taskProps {
    task: Task;
    onArchiveTask: Function;
    onPinTask: Function;
}

const TaskItem = (props: taskProps) => {
    return (
        <div className={`list-item ${props.task.state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={props.task.state === "TASK_ARCHIVED"}
                    disabled={true}
                    name="checked"
                />
                <span
                    className="checkbox-custom"
                    onClick={() => props.onArchiveTask(props.task.id)}
                />
            </label>
            <div className="title">
                <input
                    type="text"
                    value={props.task.title}
                    readOnly={true}
                    placeholder="Input title"
                />
            </div>

            <div
                className="actions"
                onClick={(event) => event.stopPropagation()}
            >
                {props.task.state !== "TASK_ARCHIVED" && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => props.onPinTask(props.task.id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
};

// this is just for javascript typescript does infact solve that problem
// but u still can use this here
TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

export default TaskItem;
