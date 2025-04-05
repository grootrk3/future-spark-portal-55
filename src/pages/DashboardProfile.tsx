
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Loader2,
  Edit,
  Save,
  Key
} from 'lucide-react';
import { toast } from 'sonner';

const DashboardProfile = () => {
  // Sample student data - in a real app, this would come from the backend
  const [studentData, setStudentData] = useState({
    id: 'STU-2025-0042',
    name: 'John Doe',
    email: 'john.doe@student.futurespark.edu',
    phone: '(123) 456-7890',
    dateOfBirth: '1999-05-15',
    address: '123 University Avenue',
    city: 'Education City',
    state: 'ST',
    zipCode: '54321',
    country: 'USA',
    program: 'Computer Science',
    batch: '2025',
    enrollmentDate: '2021-09-01',
    expectedGraduation: '2025-05-31',
    advisorName: 'Dr. Sarah Peterson',
    advisorEmail: 'sarah.peterson@futurespark.edu'
  });
  
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...studentData});
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Handle saving profile changes
  const handleSaveProfile = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setStudentData({...editedProfile});
      setIsEditingProfile(false);
      setIsSaving(false);
      toast.success('Profile updated successfully');
    }, 1500);
  };

  // Handle password change
  const handleChangePassword = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error('All password fields are required');
      return;
    }
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('New password and confirmation do not match');
      return;
    }
    
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setIsSaving(false);
      
      // Close dialog
      document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" })
      );
      
      toast.success('Password changed successfully');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            onClick={() => isEditingProfile ? setIsEditingProfile(false) : setEditedProfile({...studentData})}
          >
            {isEditingProfile ? 'Cancel' : 'Edit Profile'}
          </Button>
          
          {isEditingProfile ? (
            <Button 
              className="bg-university-teal hover:bg-university-teal/90"
              onClick={handleSaveProfile}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={16} className="mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-university-blue hover:bg-university-blue/90">
                  <Key size={16} className="mr-2" />
                  Change Password
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Change Password</DialogTitle>
                  <DialogDescription>
                    Enter your current password and a new password to update your credentials.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Current Password
                    </label>
                    <Input 
                      type="password" 
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      New Password
                    </label>
                    <Input 
                      type="password" 
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Confirm New Password
                    </label>
                    <Input 
                      type="password" 
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    type="submit" 
                    onClick={handleChangePassword}
                    disabled={isSaving}
                    className="bg-university-teal hover:bg-university-teal/90"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Changing...
                      </>
                    ) : 'Change Password'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student ID Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle>Student ID</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
              <User size={64} className="text-gray-500" />
            </div>
            <h2 className="text-xl font-bold">{studentData.name}</h2>
            <p className="text-university-teal font-medium">{studentData.program}</p>
            <div className="mt-4 mb-2 w-full max-w-xs bg-university-blue text-white p-4 rounded-md">
              <div className="text-center">
                <p className="text-sm mb-1">Student ID</p>
                <p className="text-xl font-mono font-bold">{studentData.id}</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <p>Batch of {studentData.batch}</p>
              <p>Valid until {studentData.expectedGraduation}</p>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              {isEditingProfile ? 'Edit your personal information below' : 'Your personal details and contact information'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isEditingProfile ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <User size={16} className="mr-2" />
                    <span>Full Name</span>
                  </div>
                  <p className="font-medium">{studentData.name}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <Mail size={16} className="mr-2" />
                    <span>Email Address</span>
                  </div>
                  <p className="font-medium">{studentData.email}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <Phone size={16} className="mr-2" />
                    <span>Phone Number</span>
                  </div>
                  <p className="font-medium">{studentData.phone}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Date of Birth</span>
                  </div>
                  <p className="font-medium">{studentData.dateOfBirth}</p>
                </div>
                
                <div className="space-y-3 md:col-span-2">
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>Address</span>
                  </div>
                  <p className="font-medium">
                    {studentData.address}, {studentData.city}, {studentData.state} {studentData.zipCode}, {studentData.country}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Full Name
                    </label>
                    <Input 
                      value={editedProfile.name}
                      onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email Address
                    </label>
                    <Input 
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                      disabled
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Phone Number
                    </label>
                    <Input 
                      value={editedProfile.phone}
                      onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Date of Birth
                    </label>
                    <Input 
                      type="date"
                      value={editedProfile.dateOfBirth}
                      onChange={(e) => setEditedProfile({...editedProfile, dateOfBirth: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Address
                  </label>
                  <Input 
                    value={editedProfile.address}
                    onChange={(e) => setEditedProfile({...editedProfile, address: e.target.value})}
                    className="mb-2"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      City
                    </label>
                    <Input 
                      value={editedProfile.city}
                      onChange={(e) => setEditedProfile({...editedProfile, city: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      State
                    </label>
                    <Input 
                      value={editedProfile.state}
                      onChange={(e) => setEditedProfile({...editedProfile, state: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Zip Code
                    </label>
                    <Input 
                      value={editedProfile.zipCode}
                      onChange={(e) => setEditedProfile({...editedProfile, zipCode: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Country
                    </label>
                    <Input 
                      value={editedProfile.country}
                      onChange={(e) => setEditedProfile({...editedProfile, country: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>
              Your program details and academic advisor information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Program</h3>
                <p>{studentData.program}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Batch</h3>
                <p>{studentData.batch}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Enrollment Date</h3>
                <p>{studentData.enrollmentDate}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Expected Graduation</h3>
                <p>{studentData.expectedGraduation}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Academic Advisor</h3>
                <p>{studentData.advisorName}</p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700">Advisor Email</h3>
                <p>
                  <a href={`mailto:${studentData.advisorEmail}`} className="text-university-teal hover:underline">
                    {studentData.advisorEmail}
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardProfile;
