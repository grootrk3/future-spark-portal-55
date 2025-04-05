import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { 
  Badge, 
} from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  Briefcase,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Edit,
  FileText,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Upload,
  User,
  Plus
} from 'lucide-react';
import { toast } from 'sonner';

const DashboardPlacement = () => {
  const [placementData, setPlacementData] = useState({
    status: 'In Progress',
    preferredLocation: 'New York, USA',
    preferredIndustry: 'Technology',
    preferredRoles: ['Software Engineer', 'Data Scientist'],
    resumeUrl: '/resume.pdf',
    resumeLastUpdated: '2025-03-15',
    coverLetterUrl: '/cover-letter.pdf',
    coverLetterLastUpdated: '2025-03-15',
    interviewSkillsAssessment: 85,
    portfolioUrl: 'https://portfolio.johndoe.com',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    currentApplications: [
      {
        id: 'APP-001',
        company: 'TechCorp Inc.',
        position: 'Junior Software Engineer',
        location: 'New York, USA',
        appliedDate: '2025-03-20',
        status: 'Application Submitted',
        interviewDate: null
      },
      {
        id: 'APP-002',
        company: 'DataViz Solutions',
        position: 'Data Analyst',
        location: 'Boston, USA',
        appliedDate: '2025-03-18',
        status: 'Interview Scheduled',
        interviewDate: '2025-04-10'
      }
    ],
    placementHistory: [],
    notes: 'Looking for full-time opportunities in software development or data science. Prefer remote work options.'
  });
  
  const [isEditingPreferences, setIsEditingPreferences] = useState(false);
  const [editedPreferences, setEditedPreferences] = useState({
    preferredLocation: placementData.preferredLocation,
    preferredIndustry: placementData.preferredIndustry,
    preferredRoles: placementData.preferredRoles.join(', '),
    portfolioUrl: placementData.portfolioUrl,
    linkedinUrl: placementData.linkedinUrl,
    notes: placementData.notes
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [uploadFile, setUploadFile] = useState(null);
  
  const [isAddingApplication, setIsAddingApplication] = useState(false);
  const [newApplication, setNewApplication] = useState({
    company: '',
    position: '',
    location: '',
    appliedDate: new Date().toISOString().split('T')[0],
    status: 'Application Submitted',
    interviewDate: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
    }
  };

  const handleFileUpload = () => {
    if (!uploadFile) {
      toast.error('Please select a file to upload');
      return;
    }
    
    setIsUploading(true);
    
    setTimeout(() => {
      const today = new Date().toISOString().split('T')[0];
      
      if (uploadType === 'resume') {
        setPlacementData({
          ...placementData,
          resumeUrl: URL.createObjectURL(uploadFile),
          resumeLastUpdated: today
        });
        toast.success('Resume uploaded successfully');
      } else if (uploadType === 'coverLetter') {
        setPlacementData({
          ...placementData,
          coverLetterUrl: URL.createObjectURL(uploadFile),
          coverLetterLastUpdated: today
        });
        toast.success('Cover letter uploaded successfully');
      }
      
      setIsUploading(false);
      setUploadFile(null);
      
      document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" })
      );
    }, 1500);
  };

  const handleSavePreferences = () => {
    setIsEditingPreferences(false);
    
    setPlacementData({
      ...placementData,
      preferredLocation: editedPreferences.preferredLocation,
      preferredIndustry: editedPreferences.preferredIndustry,
      preferredRoles: editedPreferences.preferredRoles.split(',').map(role => role.trim()),
      portfolioUrl: editedPreferences.portfolioUrl,
      linkedinUrl: editedPreferences.linkedinUrl,
      notes: editedPreferences.notes
    });
    
    toast.success('Placement preferences updated successfully');
  };

  const handleAddApplication = () => {
    if (!newApplication.company || !newApplication.position) {
      toast.error('Company and position are required');
      return;
    }
    
    setIsAddingApplication(false);
    
    const newAppId = `APP-${String(placementData.currentApplications.length + 1).padStart(3, '0')}`;
    
    setPlacementData({
      ...placementData,
      currentApplications: [
        {
          id: newAppId,
          company: newApplication.company,
          position: newApplication.position,
          location: newApplication.location,
          appliedDate: newApplication.appliedDate,
          status: newApplication.status,
          interviewDate: newApplication.interviewDate || null
        },
        ...placementData.currentApplications
      ]
    });
    
    setNewApplication({
      company: '',
      position: '',
      location: '',
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Application Submitted',
      interviewDate: ''
    });
    
    toast.success('New job application added successfully');
  };

  const ApplicationStatusBadge = ({ status }) => {
    switch (status) {
      case 'Application Submitted':
        return <Badge className="bg-blue-500">Submitted</Badge>;
      case 'Interview Scheduled':
        return <Badge className="bg-purple-500">Interview Scheduled</Badge>;
      case 'Interview Completed':
        return <Badge className="bg-orange-500">Interview Completed</Badge>;
      case 'Offer Received':
        return <Badge className="bg-green-500">Offer Received</Badge>;
      case 'Rejected':
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const PlacementStatusBadge = ({ status }) => {
    switch (status) {
      case 'Not Started':
        return <Badge className="bg-gray-500">Not Started</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-500">In Progress</Badge>;
      case 'Placed':
        return <Badge className="bg-green-500">Placed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Placement Portal</h1>
          <p className="text-gray-500">Track your placement activities and applications</p>
        </div>
        <PlacementStatusBadge status={placementData.status} />
      </div>

      <Dialog>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Upload {uploadType === 'resume' ? 'Resume' : 'Cover Letter'}</DialogTitle>
            <DialogDescription>
              Upload your latest {uploadType === 'resume' ? 'resume' : 'cover letter'} document.
              Supported formats: PDF, DOC, DOCX.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 focus-within:border-university-teal transition-colors">
              <input
                type="file"
                id="document-upload"
                className="sr-only"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <label htmlFor="document-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {uploadFile ? uploadFile.name : `Click to upload ${uploadType === 'resume' ? 'resume' : 'cover letter'}`}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {!uploadFile && 'Supports PDF, DOC, DOCX up to 5MB'}
                  </span>
                </div>
              </label>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
                new KeyboardEvent("keydown", { key: "Escape" })
              );
            }}>
              Cancel
            </Button>
            <Button 
              onClick={handleFileUpload} 
              className="bg-university-teal hover:bg-university-teal/90"
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Document
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Job Application</DialogTitle>
            <DialogDescription>
              Track a new job application you've submitted.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Company Name
                </label>
                <Input 
                  placeholder="Enter company name"
                  value={newApplication.company}
                  onChange={(e) => setNewApplication({...newApplication, company: e.target.value})}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Position
                </label>
                <Input 
                  placeholder="Enter job title"
                  value={newApplication.position}
                  onChange={(e) => setNewApplication({...newApplication, position: e.target.value})}
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Location
                </label>
                <Input 
                  placeholder="Enter job location"
                  value={newApplication.location}
                  onChange={(e) => setNewApplication({...newApplication, location: e.target.value})}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Application Date
                </label>
                <Input 
                  type="date" 
                  value={newApplication.appliedDate}
                  onChange={(e) => setNewApplication({...newApplication, appliedDate: e.target.value})}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Application Status
                </label>
                <Select 
                  value={newApplication.status}
                  onValueChange={(value) => setNewApplication({...newApplication, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Application Submitted">Application Submitted</SelectItem>
                    <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
                    <SelectItem value="Interview Completed">Interview Completed</SelectItem>
                    <SelectItem value="Offer Received">Offer Received</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {newApplication.status === 'Interview Scheduled' && (
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Interview Date
                  </label>
                  <Input 
                    type="date" 
                    value={newApplication.interviewDate}
                    onChange={(e) => setNewApplication({...newApplication, interviewDate: e.target.value})}
                  />
                </div>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
                new KeyboardEvent("keydown", { key: "Escape" })
              );
            }}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddApplication} 
              className="bg-university-teal hover:bg-university-teal/90"
            >
              Add Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Resume</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {placementData.resumeUrl ? (
                <div className="flex flex-col items-center justify-center">
                  <FileText size={48} className="text-university-blue mb-2" />
                  <div className="text-sm text-gray-500 mb-2">
                    Last updated: {placementData.resumeLastUpdated}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a 
                        href={placementData.resumeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </Button>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm"
                        className="bg-university-teal hover:bg-university-teal/90"
                        onClick={() => setUploadType('resume')}
                      >
                        Update
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6">
                  <Upload size={32} className="text-gray-400 mb-2" />
                  <p className="text-gray-500 mb-4">No resume uploaded yet</p>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-university-teal hover:bg-university-teal/90"
                      onClick={() => setUploadType('resume')}
                    >
                      Upload Resume
                    </Button>
                  </DialogTrigger>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Cover Letter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {placementData.coverLetterUrl ? (
                <div className="flex flex-col items-center justify-center">
                  <FileText size={48} className="text-university-blue mb-2" />
                  <div className="text-sm text-gray-500 mb-2">
                    Last updated: {placementData.coverLetterLastUpdated}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a 
                        href={placementData.coverLetterUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </Button>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm"
                        className="bg-university-teal hover:bg-university-teal/90"
                        onClick={() => setUploadType('coverLetter')}
                      >
                        Update
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6">
                  <Upload size={32} className="text-gray-400 mb-2" />
                  <p className="text-gray-500 mb-4">No cover letter uploaded yet</p>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-university-teal hover:bg-university-teal/90"
                      onClick={() => setUploadType('coverLetter')}
                    >
                      Upload Cover Letter
                    </Button>
                  </DialogTrigger>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Placement Preferences</CardTitle>
              {!isEditingPreferences ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsEditingPreferences(true)}
                >
                  <Edit size={16} className="mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsEditingPreferences(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-university-teal hover:bg-university-teal/90"
                    onClick={handleSavePreferences}
                  >
                    Save
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {!isEditingPreferences ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin size={18} className="text-university-teal mr-2" />
                      <h3 className="text-sm font-medium text-gray-700">Preferred Location</h3>
                    </div>
                    <p>{placementData.preferredLocation}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building size={18} className="text-university-teal mr-2" />
                      <h3 className="text-sm font-medium text-gray-700">Preferred Industry</h3>
                    </div>
                    <p>{placementData.preferredIndustry}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Briefcase size={18} className="text-university-teal mr-2" />
                      <h3 className="text-sm font-medium text-gray-700">Preferred Roles</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {placementData.preferredRoles.map((role, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Globe size={18} className="text-university-teal mr-2" />
                      <h3 className="text-sm font-medium text-gray-700">Online Presence</h3>
                    </div>
                    <div className="space-y-2">
                      <a 
                        href={placementData.portfolioUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-university-teal hover:underline block"
                      >
                        Portfolio Website
                      </a>
                      <a 
                        href={placementData.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-university-teal hover:underline block"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center mb-2">
                    <FileText size={18} className="text-university-teal mr-2" />
                    <h3 className="text-sm font-medium text-gray-700">Additional Notes</h3>
                  </div>
                  <p className="text-gray-600">{placementData.notes}</p>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Preferred Location
                    </label>
                    <Input 
                      value={editedPreferences.preferredLocation}
                      onChange={(e) => setEditedPreferences({...editedPreferences, preferredLocation: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Preferred Industry
                    </label>
                    <Input 
                      value={editedPreferences.preferredIndustry}
                      onChange={(e) => setEditedPreferences({...editedPreferences, preferredIndustry: e.target.value})}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Preferred Roles (comma-separated)
                    </label>
                    <Input 
                      value={editedPreferences.preferredRoles}
                      onChange={(e) => setEditedPreferences({...editedPreferences, preferredRoles: e.target.value})}
                      placeholder="e.g. Software Engineer, Data Scientist"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Portfolio Website URL
                    </label>
                    <Input 
                      value={editedPreferences.portfolioUrl}
                      onChange={(e) => setEditedPreferences({...editedPreferences, portfolioUrl: e.target.value})}
                      placeholder="e.g. https://portfolio.example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      LinkedIn URL
                    </label>
                    <Input 
                      value={editedPreferences.linkedinUrl}
                      onChange={(e) => setEditedPreferences({...editedPreferences, linkedinUrl: e.target.value})}
                      placeholder="e.g. https://linkedin.com/in/username"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Additional Notes
                  </label>
                  <Textarea 
                    value={editedPreferences.notes}
                    onChange={(e) => setEditedPreferences({...editedPreferences, notes: e.target.value})}
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Job Applications</CardTitle>
            <DialogTrigger asChild>
              <Button 
                className="bg-university-teal hover:bg-university-teal/90"
                onClick={() => setIsAddingApplication(true)}
              >
                <Plus size={16} className="mr-2" />
                Add Application
              </Button>
            </DialogTrigger>
          </div>
        </CardHeader>
        <CardContent>
          {placementData.currentApplications.length > 0 ? (
            <div className="space-y-4">
              {placementData.currentApplications.map((application) => (
                <Card key={application.id} className="overflow-hidden">
                  <div className="border-l-4 border-university-teal p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{application.position}</h3>
                        <p className="text-gray-600">{application.company}</p>
                      </div>
                      <ApplicationStatusBadge status={application.status} />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={14} className="mr-1" />
                        {application.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        Applied: {application.appliedDate}
                      </div>
                      {application.interviewDate && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          Interview: {application.interviewDate}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Briefcase className="mx-auto mb-2" size={32} />
              <p>No job applications added yet</p>
              <p className="text-sm mt-1">Click "Add Application" to track your job applications</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPlacement;
