import React from 'react';
import Notifications from '@/components/Nurse/Notifications';
import LoginStatus from '@/components/Nurse/LoginStatus';


interface RightSidebarProps {
  notifications: any[];
  loginInfo: {
    loginAs: string;
    userType: string;
    organization: string;
    loginTime: string;
    lastLogin: string;
  };
}

const RightSidebar: React.FC<RightSidebarProps> = ({ notifications,  loginInfo }) => {
  return (
    <div className="w-80 bg-gray-100 p-4 flex flex-col space-y-6 fixed top-0 right-0 h-full overflow-y-auto">
      <Notifications notifications={notifications} />
      <LoginStatus {...loginInfo} />
    </div>
  );
};

export default RightSidebar;
