export interface LoginData {
  email:  string;
  passwd: string;
}

export interface Access {
  access: boolean;
  token:  string;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  profile: Profile;
}

export interface Profile {
  id: number;
  profile: string;
}

export interface UserBody {
  name: string;
  lastName: string;
  email: string;
  passwd: string;
  profile: number;
}

export interface UserCreation {
  Message: string;
  User: User;
  status: boolean;
}
