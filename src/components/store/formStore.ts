import create from 'zustand';

interface FormData {
  email: string;
  name: string;
  domicile: string;
  university: string;
  major: string;
  semester: string;
  whatsappNumber: string;
  instagramAccount: string;
  portfolioUrl: string;
  cv: File | null;
  proofCC: File | null;
  proofSK: File | null;
  proofJourney: File | null;
  proofSequoia: File | null;
}

interface FormState {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  nextStep: () => void;
}

const useFormStore = create<FormState>((set) => ({
  formData: {
    email: '',
    name: '',
    domicile: '',
    university: '',
    major: '',
    semester: '',
    whatsappNumber: '',
    instagramAccount: '',
    portfolioUrl: '',
    cv: null,
    proofCC: null,
    proofSK: null,
    proofJourney: null,
    proofSequoia: null,
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  currentStep: 1,
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
}));

export default useFormStore;
