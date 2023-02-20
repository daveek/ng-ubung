import { uuid } from "uuidv4";

export interface Item {
  id: typeof uuid;
  label: string;
  description: string;
  category: string;
  done?: boolean;
}
