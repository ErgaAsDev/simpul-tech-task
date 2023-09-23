export interface ChatTypes {
  id: number;
  name: string;
  username?: string;
  company: { bs: string; catchPhrase: string };
  chatDate?: string;
  openChat?: boolean;
  myNewChat?: any[] | undefined;
  time: string;
}
