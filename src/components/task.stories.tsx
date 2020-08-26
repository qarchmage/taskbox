// src/components/Task.stories.js NOO MUST USE TYPESCRIPT

import React from "react";
import { action } from "@storybook/addon-actions";

import TaskItem from "./task-item.cmp";

export default {
    component: TaskItem,
    title: "Task",
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinTask: action("onPinTask"),
    onArchiveTask: action("onArchiveTask"),
};

export const Default = () => <TaskItem task={taskData} {...actionsData} />;

export const Pinned = () => (
    <TaskItem task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);

export const Archived = () => (
    <TaskItem task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);
