
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Book, Calendar, Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Demo data - in a real app, this would come from the backend
  const studentInfo = {
    name: 'John Doe',
    id: 'STU-2025-0042',
    program: 'Computer Science',
    semester: 'Fall 2025',
    gpa: '3.8',
    creditsCompleted: 45,
    activeTickets: 2,
    upcomingPayments: 1,
    placementStatus: 'Pending'
  };

  // Recent announcements
  const recentAnnouncements = [
    {
      id: 1,
      title: 'Fall Semester Registration',
      date: 'April 5, 2025',
      description: 'Registration for Fall 2025 semester is now open. Please complete your course selection by April 20th.'
    },
    {
      id: 2,
      title: 'Library Hours Extended',
      date: 'April 3, 2025',
      description: 'The campus library will extend opening hours during the final exam period from 7am to midnight.'
    }
  ];

  // Quick stats
  const quickStats = [
    { label: 'Active Tickets', value: studentInfo.activeTickets, icon: Bell, color: 'bg-orange-100 text-orange-600' },
    { label: 'Payments Due', value: studentInfo.upcomingPayments, icon: Calendar, color: 'bg-red-100 text-red-600' },
    { label: 'Credits Completed', value: studentInfo.creditsCompleted, icon: Book, color: 'bg-blue-100 text-blue-600' },
    { label: 'Current GPA', value: studentInfo.gpa, icon: GraduationCap, color: 'bg-green-100 text-green-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <span className="text-sm bg-university-lightBlue text-university-blue px-3 py-1 rounded-full">
          {studentInfo.semester}
        </span>
      </div>

      {/* Student Info Card */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex justify-between">
            <span>Student Information</span>
            <span className="text-sm font-normal text-gray-500">ID: {studentInfo.id}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
              <p className="font-semibold">{studentInfo.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Program</h3>
              <p className="font-semibold">{studentInfo.program}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Placement Status</h3>
              <p className="font-semibold">{studentInfo.placementStatus}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center space-x-4">
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/dashboard/tickets">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Bell className="mb-4 text-university-teal" size={24} />
              <h3 className="font-semibold mb-1">Support Tickets</h3>
              <p className="text-sm text-gray-500">
                Manage your support tickets and chat with staff
              </p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/dashboard/payments">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Calendar className="mb-4 text-university-teal" size={24} />
              <h3 className="font-semibold mb-1">Payments</h3>
              <p className="text-sm text-gray-500">
                View payment status and upload payment slips
              </p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/dashboard/placement">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Users className="mb-4 text-university-teal" size={24} />
              <h3 className="font-semibold mb-1">Placement</h3>
              <p className="text-sm text-gray-500">
                Update placement details and track progress
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Announcements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recent Announcements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAnnouncements.map(announcement => (
              <div key={announcement.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">{announcement.title}</h3>
                  <span className="text-xs text-gray-500">{announcement.date}</span>
                </div>
                <p className="text-sm text-gray-600">{announcement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
