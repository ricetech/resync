export interface ICourse {
  courseId: string;
  name: string;
  admin: string[];
  students: string[];
  tasks: ITask[];
}

export interface ITask {
  taskId: string;
  name: string;
  startDate: Date;
  deadline: Date;
  softDeadline: Date;
  typeTag: string[];
  displayDate: boolean;
  startTimes: ITaskTracking[];
  endTimes: ITaskTracking[];
  startPercent: Date[];
  endPercent: Date[];
}

export interface ITaskTracking {}
