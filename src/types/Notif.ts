import { Timestamp } from "firebase/firestore";

export interface Notif {
  id: string;
  taskName: string;
  content: string;
  isRead: string;
  timestamp: Timestamp;
}

export interface UserNotif extends Notif {
  uid: string;
}
