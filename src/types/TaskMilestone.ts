import { Timestamp } from "firebase/firestore";

export interface TaskMilestone {
  id: string;
  timestamp: Timestamp;
}
