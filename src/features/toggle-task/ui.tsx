import { taskLib, taskModel } from "entities/task";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";

export type ToggleTaskProps = {
  taskId: number;
  withStatus?: boolean;
};

export const ToggleTask = ({ taskId, withStatus = true }: ToggleTaskProps) => {
  const dispatch = useDispatch();
  const task = taskModel.useTask(taskId);

  if (!task) return null;

  const onToggle = () => dispatch(taskModel.toggleTask(taskId));

  const status = taskLib.getTaskStatus(task);

  return (
    <Checkbox onClick={onToggle} checked={task.completed}>
      {withStatus && status}
    </Checkbox>
  );
};
