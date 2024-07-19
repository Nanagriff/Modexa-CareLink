"use client";
import React, { useState } from 'react';

interface ReferralOrder {
  reasonForReferral: string;
  specialist: string;
  appointmentDate: string;
  notes: string;
}

interface ReferralOrderFormProps {
  referralOrders: ReferralOrder[];
  onSave: (newReferralOrders: ReferralOrder[]) => void;
}

const ReferralOrderForm: React.FC<ReferralOrderFormProps> = ({ referralOrders, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentReferralOrders, setCurrentReferralOrders] = useState<ReferralOrder[]>(referralOrders);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (index: number, field: keyof ReferralOrder, value: string) => {
    const updatedReferralOrders = [...currentReferralOrders];
    updatedReferralOrders[index][field] = value;
    setCurrentReferralOrders(updatedReferralOrders);
  };

  const handleAddReferralOrder = () => {
    setCurrentReferralOrders([
      ...currentReferralOrders,
      {
        reasonForReferral: '',
        specialist: '',
        appointmentDate: '',
        notes: '',
      },
    ]);
  };

  const handleDeleteReferralOrder = (index: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this referral order?");
    if (confirmDelete) {
      const updatedReferralOrders = [...currentReferralOrders];
      updatedReferralOrders.splice(index, 1);
      setCurrentReferralOrders(updatedReferralOrders);
    }
  };

  const handleSaveReferralOrders = () => {
    if (currentReferralOrders.length === 0) return;
    const confirmSave = window.confirm("Are you sure you want to save?");
    if (confirmSave) {
      onSave(currentReferralOrders);
      setIsExpanded(false);
      console.log("Saved");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center bg-[#28313B] text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Referral Orders</h2>
        <button
          onClick={handleToggleExpand}
          className="text-xl bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1"
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="p-4">
          {currentReferralOrders.map((referralOrder, index) => (
            <div key={index} className="border p-4 mt-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="reasonForReferral"
                  placeholder="Reason for Referral"
                  value={referralOrder.reasonForReferral}
                  onChange={(e) => handleInputChange(index, 'reasonForReferral', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="specialist"
                  placeholder="Specialist"
                  value={referralOrder.specialist}
                  onChange={(e) => handleInputChange(index, 'specialist', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="date"
                  name="appointmentDate"
                  value={referralOrder.appointmentDate}
                  onChange={(e) => handleInputChange(index, 'appointmentDate', e.target.value)}
                  className="p-2 border rounded"
                />
                <textarea
                  name="notes"
                  placeholder="Notes"
                  value={referralOrder.notes}
                  onChange={(e) => handleInputChange(index, 'notes', e.target.value)}
                  className="p-2 border rounded col-span-2"
                />
              </div>
              <button
                onClick={() => handleDeleteReferralOrder(index)}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button onClick={handleAddReferralOrder} className="bg-green-500 text-white p-2 rounded">
              Add
            </button>
            <button
              onClick={handleSaveReferralOrders}
              className="bg-green-500 text-white p-2 rounded"
              disabled={currentReferralOrders.length === 0}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralOrderForm;
