// types.ts
export interface Vital {
  vital: string;
  parameter: string;
  addedBy: string;
  time: string;
  date: string;
}

export interface Test {
  test: string;
  results: string;
  addedBy: string;
  time: string;
  date: string;
}

export interface Prescription {
  drugName: string;
  route: string;
  frequency: string;
  dose: string;
  unit: string;
  startDate: string;
  endDate: string;
  quantity: string;
  instructions: string;
  date: string;
}

export interface Result {
  id: number;
  name: string;
  studentID: string;
  indexNo: string;
  class: string;
  age: number;
  sex: string;
  dob: string;
  bloodGroup: string;
  allergies: string;
  status: string;
  contact: string;
  email: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactNumber: string;
  emergencyContactEmail: string;
  vitals: Vital[][];
  tests: Test[][];
  prescriptions: Prescription[];
  consultationNotes: string[];
}
// types.ts
export interface Prescription {
  drugName: string;
  route: string;
  frequency: string;
  dose: string;
  unit: string;
  startDate: string;
  endDate: string;
  quantity: string;
  instructions: string;
  date: string;  // Ensure this field is present
}

export interface Result {
  id: number;
  name: string;
  studentID: string;
  indexNo: string;
  class: string;
  age: number;
  sex: string;
  dob: string;
  bloodGroup: string;
  allergies: string;
  status: string;
  contact: string;
  email: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactNumber: string;
  emergencyContactEmail: string;
  vitals: Vital[][];
  tests: Test[][];
  prescriptions: Prescription[];
  consultationNotes: string[];
}

export interface CommentProps {
  username: string;
  comment: string;
  userProfileImage: string;
  replies?: CommentProps[];
}


export interface LabOrder {
  id: string;
  name: string;
  result: string; // Add this
  time: string; // Add this
  // other properties...
}

export type ReferralOrder = {
  referralReason: string;
  referredTo: string;
  date: string;
  time: string;
};