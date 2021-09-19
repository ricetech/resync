import { Timestamp } from "firebase/firestore";
import { TaskMilestone } from "./TaskMilestone";

export interface Task {
  id: string;
  name: string;
  start: Timestamp;
  end: Timestamp;
  isSoftDeadline: boolean;
  logsStart: TaskMilestone[];
  logsEnd: TaskMilestone[];
  percentStarted: Timestamp[];
  percentEnded: Timestamp[];
  tags: string[];
}
