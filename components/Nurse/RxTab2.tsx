import React from "react";
import { Prescription } from "@/types/types";
import PreviousPrescriptions from "../EHR/PreviousPrescriptions";

interface RxTab2Props {
    prescriptions: Prescription[];
    onSave: (newPrescriptions: Prescription[]) => void;
  }
  
  const RxTab2: React.FC<RxTab2Props> = ({ prescriptions, onSave }) => {
    return (
      <div>
        <PreviousPrescriptions prescriptions={prescriptions} />
      </div>
    );
  };
  
  export default RxTab2;
