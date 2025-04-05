
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Receipt, 
  Briefcase, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    { 
      name: 'Overview', 
      path: '/dashboard', 
      icon: LayoutDashboard 
    },
    { 
      name: 'Tickets & Support', 
      path: '/dashboard/tickets', 
      icon: MessageSquare 
    },
    { 
      name: 'Payments', 
      path: '/dashboard/payments', 
      icon: Receipt 
    },
    { 
      name: 'Placement', 
      path: '/dashboard/placement', 
      icon: Briefcase 
    },
    { 
      name: 'Profile', 
      path: '/dashboard/profile', 
      icon: User 
    },
    { 
      name: 'Settings', 
      path: '/dashboard/settings', 
      icon: Settings 
    },
  ];
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden fixed top-20 left-4 z-40">
          <button 
            onClick={toggleSidebar}
            className="bg-university-teal text-white p-2 rounded-md"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Sidebar */}
        <aside 
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 z-30 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out pt-20 md:pt-0 overflow-y-auto`}
        >
          <div className="p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold">Student Dashboard</h2>
            <p className="text-sm text-gray-400 mt-1">Welcome back!</p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg text-sm transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-university-teal text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <item.icon className="mr-3" size={18} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-4 border-t border-gray-800">
              <Link
                to="/"
                className="flex items-center p-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <LogOut className="mr-3" size={18} />
                Sign Out
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 pt-24 md:pt-8 bg-gray-100">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
