import create from 'zustand';

interface FormData {
  portfolioUrl: string;
  cv: File | null;
  proofCC: File | null;
  proofSK: File | null;
  proofJourney: File | null;
  proofSequoia: File | null;
}

interface Previews {
  cv: string | null;
  proofCC: string | null;
  proofSK: string | null;
  proofJourney: string | null;
  proofSequoia: string | null;
}

interface FileTypes {
  cv: string | null;
  proofCC: string | null;
  proofSK: string | null;
  proofJourney: string | null;
  proofSequoia: string | null;
}

interface UploadState {
  formData: FormData;
  previews: Previews;
  fileTypes: FileTypes;
  setFormData: (data: Partial<FormData>) => void;
  setPreviews: (data: Partial<Previews>) => void;
  setFileTypes: (data: Partial<FileTypes>) => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  formData: {
    portfolioUrl: '',
    cv: null,
    proofCC: null,
    proofSK: null,
    proofJourney: null,
    proofSequoia: null,
  },
  previews: {
    cv: null,
    proofCC: null,
    proofSK: null,
    proofJourney: null,
    proofSequoia: null,
  },
  fileTypes: {
    cv: null,
    proofCC: null,
    proofSK: null,
    proofJourney: null,
    proofSequoia: null,
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  setPreviews: (data) => set((state) => ({ previews: { ...state.previews, ...data } })),
  setFileTypes: (data) => set((state) => ({ fileTypes: { ...state.fileTypes, ...data } })),
}));
