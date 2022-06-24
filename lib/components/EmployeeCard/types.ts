export interface EmployeeCardProps {
  employee: {
    name: string;
    position: string;
    phone: string;
    image: string;
    github?: string;
    mail?: string;
    linkedin?: string;
  };
}
