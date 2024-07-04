export type TVacancy = {
  slug: string;
  name: string;
  requirements: string;
  description: string;
  responsibilities: string;
  benefits: string;
  about_the_team: string;
  type: string;
  is_urgent: number;
  open_registration_date: string | Date;
  closed_registration_date: string | Date;
  created_at: string | Date;
  updated_at: string | Date;
  department: string;
  division: string;
  position: string;
};

export type TPagination = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
};

export type TVacanciesResponse = {
  status: number;
  message: string;
  pagination: TPagination;
  data: TVacancy[];
};
