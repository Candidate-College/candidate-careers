export interface FormValues {
  identity: {
    email: string;
    name: string;
    domicile: string;
    university: string;
    major: string;
    semester: string;
    whatsapp: string;
  };
  social_media: {
    instagram: string;
    tiktok: string;
    x: string;
    linkedin: string;
  };
  image: {
    candidateCollegeIg?: File;
    sekolahMenulisIg?: File;
    mindfulJourneyIg?: File;
    sequoiaIg?: File;
    candidateCollegeTiktok?: File;
    candidateCollegeX?: File;
  };
}
