import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

import styles from "./styles.module.scss";

export type TaskCardProps = PropsWithChildren<{
  data?: import("shared/api").Task;
  titleHref?: string;
}> &
  import("antd").CardProps;

export const TaskCard = ({
  data,
  titleHref,
  children,
  ...cardProps
}: TaskCardProps) => {
  if (!data && !cardProps.loading) return null;

  return (
    <Card
      title={`Task#${cardProps.loading ? "" : data?.id}`}
      className={styles.root}
      {...cardProps}
    >
      {titleHref ? <Link to={titleHref}>{data?.title}</Link> : data?.title}
      {children}
    </Card>
  );
};
