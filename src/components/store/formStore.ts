import create from 'zustand';

interface FormState {
  formData: {
    email: string;
    name: string;
    domicile: string;
    university: string;
    major: string;
    semester: string;
    whatsappNumber: string;
    instagramAccount: string;
    
  };
  currentStep: number;
  totalSteps: number;
  setFormData: (name: string, value: string) => void;
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
  },
  currentStep: 1,
  totalSteps: 4,
  setFormData: (name, value) => set((state) => ({
    formData: {
      ...state.formData,
      [name]: value,
    },
  })),
  nextStep: () => set((state) => ({
    currentStep: state.currentStep < state.totalSteps ? state.currentStep + 1 : state.currentStep,
  })),

  
}));

export default useFormStore;
