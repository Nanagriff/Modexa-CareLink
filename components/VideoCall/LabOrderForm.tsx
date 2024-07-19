
"use client";
import React, { useState } from 'react';

interface LabOrder {
  testName: string;
  specimen: string;
  priority: string;
  date: string;
  instructions: string;
}

interface LabOrderFormProps {
  labOrders: LabOrder[];
  onSave: (newLabOrders: LabOrder[]) => void;
}

const LabOrderForm: React.FC<LabOrderFormProps> = ({ labOrders, onSave }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentLabOrders, setCurrentLabOrders] = useState<LabOrder[]>(labOrders);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = (index: number, field: keyof LabOrder, value: string) => {
    const updatedLabOrders = [...currentLabOrders];
    updatedLabOrders[index][field] = value;
    setCurrentLabOrders(updatedLabOrders);
  };

  const handleAddLabOrder = () => {
    setCurrentLabOrders([
      ...currentLabOrders,
      {
        testName: '',
        specimen: '',
        priority: '',
        date: new Date().toLocaleDateString(),
        instructions: '',
      },
    ]);
  };

  const handleDeleteLabOrder = (index: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this lab order?");
    if (confirmDelete) {
      const updatedLabOrders = [...currentLabOrders];
      updatedLabOrders.splice(index, 1);
      setCurrentLabOrders(updatedLabOrders);
    }
  };

  const handleSaveLabOrders = () => {
    if (currentLabOrders.length === 0) return;
    const confirmSave = window.confirm("Are you sure you want to save?");
    if (confirmSave) {
      onSave(currentLabOrders);
      setIsExpanded(false);
      console.log("Saved");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center bg-[#28313B] text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Lab Orders</h2>
        <button
          onClick={handleToggleExpand}
          className="text-xl bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1"
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="p-4">
          {currentLabOrders.map((labOrder, index) => (
            <div key={index} className="border p-4 mt-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="testName"
                  placeholder="Test Name"
                  value={labOrder.testName}
                  onChange={(e) => handleInputChange(index, 'testName', e.target.value)}
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="specimen"
                  placeholder="Specimen"
                  value={labOrder.specimen}
                  onChange={(e) => handleInputChange(index, 'specimen', e.target.value)}
                  className="p-2 border rounded"
                />
                <select
                  name="priority"
                  value={labOrder.priority}
                  onChange={(e) => handleInputChange(index, 'priority', e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="">Select Priority</option>
                  <option value="Routine">Routine</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Stat">Stat</option>
                </select>
                <input
                  type="date"
                  name="date"
                  value={labOrder.date}
                  onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                  className="p-2 border rounded"
                />
                <textarea
                  name="instructions"
                  placeholder="Instructions"
                  value={labOrder.instructions}
                  onChange={(e) => handleInputChange(index, 'instructions', e.target.value)}
                  className="p-2 border rounded col-span-2"
                />
              </div>
              <button
                onClick={() => handleDeleteLabOrder(index)}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button onClick={handleAddLabOrder} className="bg-green-500 text-white p-2 rounded">
              Add
            </button>
            <button
              onClick={handleSaveLabOrders}
              className="bg-green-500 text-white p-2 rounded"
              disabled={currentLabOrders.length === 0}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabOrderForm;
