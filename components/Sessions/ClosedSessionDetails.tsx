"use client";

import React, { useEffect } from "react";
import { ClosedSession } from "@/types/types";

interface ClosedSessionDetailsProps {
  session: ClosedSession;
  onClose: () => void;
}

const ClosedSessionDetails: React.FC<ClosedSessionDetailsProps> = ({
  session,
  onClose,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".closed-session-details-popup")) return;
      onClose();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="closed-session-details-popup bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Closed Session Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p><span className="font-semibold">Date and Time:</span> {session.date} {session.time}</p>
            <p><span className="font-semibold">Duration:</span> {session.duration}</p>
            <p><span className="font-semibold">Session Type:</span> {session.sessionType}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Patient Information</h3>
            <p><span className="font-semibold">Name:</span> {session.name}</p>
            <p><span className="font-semibold">Age:</span> {session.age}</p>
            <p><span className="font-semibold">Gender:</span> {session.sex}</p>
            <p><span className="font-semibold">Organization:</span> {session.organization}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Session Summary</h3>
            <p>{session.consultationNotes}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Diagnoses</h3>
            <ul className="list-disc list-inside">
              {session.diagnosis.split(', ').map((diag, index) => (
                <li key={index}>{diag}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Prescription</h3>
            <ul className="list-disc list-inside">
              {session.prescription.split(', ').map((pres, index) => (
                <li key={index}>{pres}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Follow-Up Instructions</h3>
            <p>{session.followUpInstructions}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Attachments</h3>
            <ul className="list-disc list-inside">
              {session.attachments.map((attachment, index) => (
                <li key={index}>
                  <a
                    href={attachment.url}
                    className="text-blue-500 hover:underline"
                    download
                  >
                    {attachment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Additional Notes</h3>
            <p>{session.additionalNotes}</p>
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => alert("Download Summary")}
          >
            Download Summary
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosedSessionDetails;
