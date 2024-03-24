import {create} from 'zustand';

export const useGlobalStore = create((set) => ({
  patientName: 'Ninguém',
  updateName: (name) => { set({ patientName: name});},
}));


