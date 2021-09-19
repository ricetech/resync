import { Task } from "./Task";

export interface Course {
  id: string;
  name: string;
  code: string;
  admins: string[];
  members: string[];
  tasks: Task[];
}
