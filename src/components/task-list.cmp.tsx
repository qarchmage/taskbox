import React from "react";
import TaskItem, { Task } from "./task-item.cmp";
import { connect } from "react-redux";
import { archiveTask, pinTask } from "../lib/redux";

interface TaskListP {
    loading?: boolean;
    tasks: Task[];
    onPinTask: Function;
    onArchiveTask: Function;
}

export const PureTaskList = (props: TaskListP) => {
    const {loading,tasks,onPinTask,onArchiveTask} = props

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span> <span>cool</span> <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks?.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const tasksInOrder = [
        ...tasks.filter((t) => t.state === "TASK_PINNED"),
        ...tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onArchiveTask={onArchiveTask}
                    onPinTask={onPinTask}
                />
            ))}
        </div>
    );
};

PureTaskList.defaultProps = {
    loading: false,
};

export default connect(
    (tasks: Task[]) => ({
        tasks: tasks,
        //tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }),
    (dispatch) => ({
        onArchiveTask: (id: string) => dispatch(archiveTask(id)),
        onPinTask: (id: string) => dispatch(pinTask(id)),
    })
)(PureTaskList);
