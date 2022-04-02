import { Button, Layout, Result } from "antd";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ToggleTask } from "features/toggle-task";
import { TaskCard, taskModel } from "entities/task";

import styles from "./styles.module.scss";

const TaskDetails = () => {
  const dispatch = useDispatch();
  const { taskId } = useParams();

  const task = taskModel.useTask(+taskId!);
  const { isFetching, isError } = taskModel.getTaskByIdAsync({ taskId: +taskId! })(
    dispatch
  );

  if (!task && isError)
    return (
      <Result
        status={404}
        title={404}
        subTitle={`Task ${taskId} was not found`}
        extra={
          <Link to="/">
            <Button type="primary">Back to tasks list</Button>
          </Link>
        }
      />
    );

  return (
    <Layout className={styles.root}>
      <Layout.Content className={styles.content}>
        <TaskCard
          data={task}
          size="default"
          loading={isFetching}
          className={styles.card}
          bodyStyle={{ height: 400 }}
          extra={<Link to="/">Back to tasks list</Link>}
          actions={[<ToggleTask key="toggle" taskId={+taskId!} />]}
        />
      </Layout.Content>
    </Layout>
  );
};

export default TaskDetails;
