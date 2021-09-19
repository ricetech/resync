export interface CourseSettings {
  id: string;
  displayStats: boolean;
  remindStartDate: boolean;
  remindEndDate: boolean;
  remindStartMilestone: boolean;
  remindEndMilestone: boolean;
  startReminderMilestone: number;
  endReminderMilestone: number;
}

export interface UserCourseSettings {
  uid: string;
}
