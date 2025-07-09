export interface FormValues {
  identity: {
    email: string;
    full_name: string;
    domicile: string;
    university: string;
    major: string;
    semester: string;
    whatsapp_number: string;
  };
  social_media: {
    instagram_url: string;
    tiktok_url: string;
    x_url: string;
    linkedin_url: string;
  };
  image: {
    proof_cc_ig_url?: File;
    proof_cc_tiktok_url?: File;
    proof_cc_x_url?: File;
    proof_mj_ig_url?: File;
    proof_sequioa_ig_url?: File;
    proof_sm_ig_url?: File;
  };
}
