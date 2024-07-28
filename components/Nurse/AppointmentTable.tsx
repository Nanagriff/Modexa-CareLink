import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AppointmentDetails from './AppointmentDetails';

interface Appointment {
  id: number;
  patientName: string;
  patientAge: number;
  patientSex: string;
  patientOrganization: string;
  physicianName: string;
  date: string;
  time: string;
  mode: string;
  reason: string;
}

interface AppointmentTableProps {
  appointments: Appointment[];
  onRemoveAppointment: (id: number) => void;
}

const AppointmentTable: React.FC<AppointmentTableProps> = ({ appointments, onRemoveAppointment }) => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 4;

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  const handleRemoveAppointment = (id: number) => {
    onRemoveAppointment(id);
    closeModal();
  };

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl">
      {appointments.length === 0 ? (
        <div className="text-center text-gray-500">No Appointments Scheduled</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-6 gap-4 text-center font-semibold text-gray-700">
            <div>#</div>
            <div>Patient Name</div>
            <div>Physician</div>
            <div>Date</div>
            <div>Time</div>
            <div>Mode</div>
          </div>
          {currentAppointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="grid grid-cols-6 gap-4 text-center p-4 rounded-lg bg-green-600 text-white hover:shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
              onClick={() => handleAppointmentClick(appointment)}
            >
              <div className="font-medium">{indexOfFirstAppointment + index + 1}</div>
              <div className="font-medium">{appointment.patientName}</div>
              <div className="font-medium">{appointment.physicianName}</div>
              <div className="font-medium">{appointment.date}</div>
              <div className="font-medium">{appointment.time}</div>
              <div className="font-medium">{appointment.mode}</div>
            </div>
          ))}
        </div>
      )}
      {appointments.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {indexOfFirstAppointment + 1} to {Math.min(indexOfLastAppointment, appointments.length)} of {appointments.length}
          </div>
          <div className="flex space-x-2">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-l-lg hover:bg-gray-400 disabled:bg-gray-200">
              <FaChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-300 rounded-r-lg hover:bg-gray-400 disabled:bg-gray-200">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
      {selectedAppointment && <AppointmentDetails appointment={selectedAppointment} onClose={closeModal} onRemove={handleRemoveAppointment} />}
    </div>
  );
};

export default AppointmentTable;
