export interface IUser {
    id: number;
    fullName: string;
    username: string;
    password: string;
    email: string;
    profile: string;
    status: "active" | "deactive" | "";
    birthday: string;
  };