
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
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { 
  Bell, 
  Mail, 
  Lock, 
  Shield, 
  Smartphone, 
  Loader2, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const DashboardSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    academicUpdates: true,
    paymentReminders: true,
    marketingEmails: false,
    securityAlerts: true
  });
  
  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    showProfileToStudents: true,
    showProfileToFaculty: true,
    showContactInfo: false,
    allowDataUsage: true
  });
  
  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    trustedDevices: []
  });
  
  // Time zone setting
  const [timeZone, setTimeZone] = useState('America/New_York');
  
  // Handle notifications settings change
  const handleNotificationChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    });
    
    // Simulate API call
    toast.success(`${setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} ${!notificationSettings[setting] ? 'enabled' : 'disabled'}`);
  };
  
  // Handle privacy settings change
  const handlePrivacyChange = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting]
    });
    
    // Simulate API call
    toast.success(`Privacy setting updated`);
  };
  
  // Handle security settings change
  const handleSecurityChange = (setting) => {
    setSecuritySettings({
      ...securitySettings,
      [setting]: !securitySettings[setting]
    });
    
    if (setting === 'twoFactorAuth' && !securitySettings[setting]) {
      // Simulating 2FA setup
      setIsLoading(true);
      setTimeout(() => {
        toast.success('Two-factor authentication enabled');
        setIsLoading(false);
      }, 1500);
    } else {
      toast.success('Security setting updated');
    }
  };
  
  // Handle time zone change
  const handleTimeZoneChange = (value) => {
    setTimeZone(value);
    toast.success('Time zone updated');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      
      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 text-university-teal" size={20} />
            Notification Settings
          </CardTitle>
          <CardDescription>
            Manage how you receive notifications and updates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive notifications via email
              </p>
            </div>
            <Switch 
              checked={notificationSettings.emailNotifications}
              onCheckedChange={() => handleNotificationChange('emailNotifications')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">SMS Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive time-sensitive notifications via SMS
              </p>
            </div>
            <Switch 
              checked={notificationSettings.smsNotifications}
              onCheckedChange={() => handleNotificationChange('smsNotifications')}
            />
          </div>
          
          <div className="border-t pt-6 space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Notification Types</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm">Academic Updates</h4>
                <p className="text-xs text-gray-500">
                  Grades, assignments, and course announcements
                </p>
              </div>
              <Switch 
                checked={notificationSettings.academicUpdates}
                onCheckedChange={() => handleNotificationChange('academicUpdates')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm">Payment Reminders</h4>
                <p className="text-xs text-gray-500">
                  Upcoming due dates and payment confirmations
                </p>
              </div>
              <Switch 
                checked={notificationSettings.paymentReminders}
                onCheckedChange={() => handleNotificationChange('paymentReminders')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm">Marketing Emails</h4>
                <p className="text-xs text-gray-500">
                  University events, programs, and opportunities
                </p>
              </div>
              <Switch 
                checked={notificationSettings.marketingEmails}
                onCheckedChange={() => handleNotificationChange('marketingEmails')}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-sm">Security Alerts</h4>
                <p className="text-xs text-gray-500">
                  Account logins and important security updates
                </p>
              </div>
              <Switch 
                checked={notificationSettings.securityAlerts}
                onCheckedChange={() => handleNotificationChange('securityAlerts')}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 text-university-teal" size={20} />
            Privacy Settings
          </CardTitle>
          <CardDescription>
            Control your data and who can see your information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Show Profile to Students</h3>
              <p className="text-sm text-gray-500">
                Allow other students to see your profile
              </p>
            </div>
            <Switch 
              checked={privacySettings.showProfileToStudents}
              onCheckedChange={() => handlePrivacyChange('showProfileToStudents')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Show Profile to Faculty</h3>
              <p className="text-sm text-gray-500">
                Allow faculty and staff to see your profile
              </p>
            </div>
            <Switch 
              checked={privacySettings.showProfileToFaculty}
              onCheckedChange={() => handlePrivacyChange('showProfileToFaculty')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Show Contact Information</h3>
              <p className="text-sm text-gray-500">
                Display your contact information on your profile
              </p>
            </div>
            <Switch 
              checked={privacySettings.showContactInfo}
              onCheckedChange={() => handlePrivacyChange('showContactInfo')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Allow Data Usage</h3>
              <p className="text-sm text-gray-500">
                Allow the university to use your data for analytics and improvements
              </p>
            </div>
            <Switch 
              checked={privacySettings.allowDataUsage}
              onCheckedChange={() => handlePrivacyChange('allowDataUsage')}
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="mr-2 text-university-teal" size={20} />
            Security Settings
          </CardTitle>
          <CardDescription>
            Protect your account and secure your data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            {isLoading ? (
              <Loader2 className="animate-spin text-university-teal" size={20} />
            ) : (
              <Switch 
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={() => handleSecurityChange('twoFactorAuth')}
              />
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-base font-medium">Login Notifications</h3>
              <p className="text-sm text-gray-500">
                Get notified when someone logs into your account
              </p>
            </div>
            <Switch 
              checked={securitySettings.loginNotifications}
              onCheckedChange={() => handleSecurityChange('loginNotifications')}
            />
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Trusted Devices</h3>
            
            {securitySettings.trustedDevices.length > 0 ? (
              <div className="space-y-3">
                {securitySettings.trustedDevices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                    <div className="flex items-center">
                      <Smartphone className="mr-3 text-gray-500" size={18} />
                      <div>
                        <p className="text-sm font-medium">{device.name}</p>
                        <p className="text-xs text-gray-500">Last used: {device.lastUsed}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500 bg-gray-50 rounded-md">
                <Smartphone className="mx-auto mb-2" size={24} />
                <p className="text-sm">No trusted devices</p>
                <p className="text-xs mt-1">Your current device will be added when you enable two-factor authentication</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>
            Customize your student portal experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Time Zone
              </label>
              <Select 
                value={timeZone}
                onValueChange={handleTimeZoneChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                  <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                  <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                  <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                  <SelectItem value="America/Anchorage">Alaska Time (AKT)</SelectItem>
                  <SelectItem value="Pacific/Honolulu">Hawaii Time (HT)</SelectItem>
                  <SelectItem value="UTC">Universal Time (UTC)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                This will affect how dates and times are displayed throughout the portal
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Data Export */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mail className="mr-2 text-university-teal" size={20} />
            Data Export
          </CardTitle>
          <CardDescription>
            Download a copy of your personal data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Request Data Export</h3>
                <p className="text-sm text-gray-500">
                  We'll generate a file with all your personal data that you can download
                </p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-university-teal hover:bg-university-teal/90"
                onClick={() => toast.success('Data export requested. You will receive an email when it\'s ready.')}
              >
                Request Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSettings;
