import { Radio } from "antd";
import { useDispatch } from "react-redux";

import { taskModel } from "entities/task";
import { DEFAULT_FILTER, filtersList, getFilterById } from "./config";

export const TasksFilters = () => {
  const dispatch = useDispatch();
  const isLoading = taskModel.isTasksLoading();
  const onFilterClick = (config: taskModel.QueryConfig) =>
    dispatch(taskModel.setQueryConfig(config));

  return (
    <Radio.Group defaultValue={DEFAULT_FILTER} buttonStyle="solid">
      {filtersList.map(({ title, id }) => (
        <Radio.Button
          key={id}
          onClick={() => onFilterClick(getFilterById(id).config)}
          value={id}
          disabled={isLoading}
        >
          {title}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};
