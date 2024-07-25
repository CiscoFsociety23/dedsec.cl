export interface LoginData {
  email:  string;
  passwd: string;
}

export interface Access {
  access: boolean;
  token:  string;
}

export interface User {
  id: number,
  name: string,
  lastName: string,
  email: string,
  profile: Profile
}

export interface Profile {
  profile: string
}
