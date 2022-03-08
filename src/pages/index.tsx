import { Routes, Route } from "react-router";
import { lazy } from "react";

const TasksListPage = lazy(() => import("./tasks-list"));
const TasksDetailsPage = lazy(() => import("./task-details"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksListPage />} />
      <Route path="/:taskId" element={<TasksDetailsPage />} />
    </Routes>
  );
};
