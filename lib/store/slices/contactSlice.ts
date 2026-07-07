import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  telephone: string;
  enquiry: string;
}

interface ContactState {
  form: ContactFormData;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

const initialForm: ContactFormData = {
  fullName: "",
  companyName: "",
  email: "",
  telephone: "",
  enquiry: "",
};

const initialState: ContactState = {
  form: initialForm,
  isSubmitting: false,
  isSubmitted: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormData; value: string }>
    ) => {
      state.form[action.payload.field] = action.payload.value;
      state.error = null;
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isSubmitting = action.payload;
    },
    setSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
      if (action.payload) {
        state.form = initialForm;
      }
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetForm: (state) => {
      state.form = initialForm;
      state.isSubmitted = false;
      state.error = null;
    },
  },
});

export const {
  updateField,
  setSubmitting,
  setSubmitted,
  setError,
  resetForm,
} = contactSlice.actions;

export default contactSlice.reducer;
