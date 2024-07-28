const MainContent: React.FC = () => {
    return (
        <div className="p-6 flex-1 bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md mb-6">
                <h1 className="text-3xl font-bold">Good Morning, Dr. Samuel Griff</h1>
                <p className="text-gray-600">Today is Wednesday, 14 Feb</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-seablue p-6 rounded shadow-md text-center text-white">
                    <p>Total Patients</p>
                    <p className="text-2xl font-bold">250</p>
                </div>
                <div className="bg-red-500 p-6 rounded shadow-md text-center text-white">
                    <p>Audio Calls</p>
                    <p className="text-2xl font-bold">250</p>
                </div>
                <div className="bg-yellow-500 p-6 rounded shadow-md text-center text-white">
                    <p>Chat Sessions</p>
                    <p className="text-2xl font-bold">250</p>
                </div>
                <div className="bg-blue-500 p-6 rounded shadow-md text-center text-white">
                    <p>Video Calls</p>
                    <p className="text-2xl font-bold">250</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">RMP</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>BP</th>
                            <th>BG</th>
                            <th>Temp</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elisha Mensah</td>
                            <td>Flagged</td>
                            <td>122/85</td>
                            <td>15</td>
                            <td>3.9</td>
                            <td>03 May 2024</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainContent;
