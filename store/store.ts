import { create } from "zustand";

type inputState = {
  input: { day: string; month: string; year: string };
};

type inputAction = {
  setDay: (value: string) => void;
  setMonth: (value: string) => void;
  setYear: (value: string) => void;
};

export const useInput = create<inputState & inputAction>((set) => ({
  input: { day: "", month: "", year: "" },
  setDay: (value) =>
    set((state) => ({ input: { ...state.input, day: value } })),
  setMonth: (value) =>
    set((state) => ({ input: { ...state.input, month: value } })),
  setYear: (value) =>
    set((state) => ({ input: { ...state.input, year: value } })),
}));

type errorState = {
  error: {
    day: {
      isError: boolean;
      errorMessage: string;
    };
    month: {
      isError: boolean;
      errorMessage: string;
    };
    year: {
      isError: boolean;
      errorMessage: string;
    };
  };
};

type errorAction = {
  setDayError: (isError: boolean, errorMessage: string) => void;
  setMonthError: (isError: boolean, errorMessage: string) => void;
  setYearError: (isError: boolean, errorMessage: string) => void;
};

export const useError = create<errorState & errorAction>((set) => ({
  error: {
    day: {
      isError: false,
      errorMessage: "",
    },
    month: {
      isError: false,
      errorMessage: "",
    },
    year: {
      isError: false,
      errorMessage: "",
    },
  },
  setDayError: (isError, errorMessage) =>
    set((state) => ({
      error: { ...state.error, day: { isError, errorMessage } },
    })),
  setMonthError: (isError, errorMessage) =>
    set((state) => ({
      error: { ...state.error, month: { isError, errorMessage } },
    })),
  setYearError: (isError, errorMessage) =>
    set((state) => ({
      error: { ...state.error, year: { isError, errorMessage } },
    })),
}));

type displayState = {
  display: {
    day: string;
    month: string;
    year: string;
  };
};

type displayAction = {
  setDisplay: (value: displayState) => void;
};

export const useDisplay = create<displayState & displayAction>((set) => ({
  display: { day: "", month: "", year: "" },
  setDisplay: (value) => set(value),
}));
