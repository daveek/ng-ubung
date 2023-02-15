import { uuid } from "uuidv4";

export interface Item {
  id: uuid;
  label: string;
  description: string;
  category: string;
  done: boolean = false;
}
