// interfaces.ts

export interface VitalsData {
    bloodPressureSystolic: string;
    bloodPressureDiastolic: string;
    temperature: string;
    temperatureDevice: string;
    weight: string;
    weightUnit: string;
    spo2: string;
    spo2Device: string;
    bloodGlucose: string;
    pulse: string;
  }
  
  export interface Test {
    testType: string;
    testName?: string;
    testResult?: string;
    testResultIgG?: string;
    testResultIgM?: string;
    appearance?: string;
    color?: string;
    ph?: string;
    specificGravity?: string;
    glucose?: string;
    ketones?: string;
    protein?: string;
    leukocytes?: string;
    nitrites?: string;
    bilirubin?: string;
    urobilirubin?: string;
    date: string;
  }
  