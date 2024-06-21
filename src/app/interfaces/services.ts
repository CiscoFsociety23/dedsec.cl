export interface ServiceStatus {
  Server:   string;
  Services: Service[];
}

export interface Service {
  name:   string;
  status: Status;
}

export interface Status {
  name: string;
}
