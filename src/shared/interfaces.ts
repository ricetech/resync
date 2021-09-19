export interface ICourse {
  courseId: string;
  name: string;
  admin: string[];
  students: string[];
  tasks: ITask[];
}

export interface ITask {
  taskId: string;
}
