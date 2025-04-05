
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Loader2
} from 'lucide-react';

// Sample ticket data
const sampleTickets = [
  {
    id: 'TK-2025-001',
    subject: 'Trouble accessing online course materials',
    department: 'Academic',
    status: 'Open',
    priority: 'Medium',
    created: '2025-04-01',
    lastUpdated: '2025-04-03',
    messages: [
      {
        id: 1,
        sender: 'John Doe',
        senderType: 'student',
        timestamp: '2025-04-01 14:30',
        content: 'I am unable to access the course materials for CS301. When I click on the link in my course dashboard, it says I don\'t have permission.',
        attachments: []
      },
      {
        id: 2,
        sender: 'Sarah Chen',
        senderType: 'support',
        timestamp: '2025-04-02 09:15',
        content: 'Thank you for reporting this issue. Could you please let me know which specific course you\'re having trouble with and what browser you\'re using?',
        attachments: []
      },
      {
        id: 3,
        sender: 'John Doe',
        senderType: 'student',
        timestamp: '2025-04-02 10:45',
        content: 'The course is Computer Science 301 - Data Structures. I tried both Chrome and Firefox browsers.',
        attachments: []
      },
      {
        id: 4,
        sender: 'Sarah Chen',
        senderType: 'support',
        timestamp: '2025-04-03 11:20',
        content: 'I\'ve checked your account and there seems to be an issue with your course enrollment. I\'ve escalated this to our IT department. They should fix it within 24 hours. Please let us know if you still have issues after that time.',
        attachments: []
      }
    ]
  },
  {
    id: 'TK-2025-002',
    subject: 'Question about graduation requirements',
    department: 'Academic Advising',
    status: 'Open',
    priority: 'Low',
    created: '2025-04-02',
    lastUpdated: '2025-04-02',
    messages: [
      {
        id: 1,
        sender: 'John Doe',
        senderType: 'student',
        timestamp: '2025-04-02 15:20',
        content: 'I\'m planning my courses for next semester and want to make sure I\'m on track to graduate. Could someone please review my transcript and let me know what requirements I still need to fulfill?',
        attachments: []
      }
    ]
  },
  {
    id: 'TK-2025-003',
    subject: 'Scholarship application status',
    department: 'Financial Aid',
    status: 'Closed',
    priority: 'High',
    created: '2025-03-15',
    lastUpdated: '2025-03-28',
    messages: [
      {
        id: 1,
        sender: 'John Doe',
        senderType: 'student',
        timestamp: '2025-03-15 09:30',
        content: 'I submitted my scholarship application three weeks ago but haven\'t heard back. Could you please check on the status?',
        attachments: []
      },
      {
        id: 2,
        sender: 'Michael Johnson',
        senderType: 'support',
        timestamp: '2025-03-20 13:45',
        content: 'Thank you for your patience. We\'re still processing scholarship applications. You should receive a decision within the next 7-10 days.',
        attachments: []
      },
      {
        id: 3,
        sender: 'Financial Aid Office',
        senderType: 'support',
        timestamp: '2025-03-28 10:15',
        content: 'Congratulations! We\'re pleased to inform you that your scholarship application has been approved. Please check your student email for the official notification with all details.',
        attachments: []
      }
    ]
  }
];

const DashboardTickets = () => {
  const [activeTicket, setActiveTicket] = useState(sampleTickets[0]);
  const [newMessage, setNewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openTickets, setOpenTickets] = useState(sampleTickets.filter(ticket => ticket.status === 'Open'));
  const [closedTickets, setClosedTickets] = useState(sampleTickets.filter(ticket => ticket.status === 'Closed'));

  // Filter tickets based on search query
  const filterTickets = (tickets) => {
    if (!searchQuery) return tickets;
    return tickets.filter(ticket => 
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const updatedTicket = {...activeTicket};
      updatedTicket.messages.push({
        id: Math.max(...activeTicket.messages.map(m => m.id)) + 1,
        sender: 'John Doe',
        senderType: 'student',
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
        content: newMessage,
        attachments: []
      });
      updatedTicket.lastUpdated = new Date().toISOString().split('T')[0];
      
      setActiveTicket(updatedTicket);
      setNewMessage('');
      setIsSubmitting(false);
      
      // Update the tickets lists
      const ticketIndex = openTickets.findIndex(t => t.id === activeTicket.id);
      if (ticketIndex !== -1) {
        const newOpenTickets = [...openTickets];
        newOpenTickets[ticketIndex] = updatedTicket;
        setOpenTickets(newOpenTickets);
      }
    }, 1000);
  };

  // Handle creating a new ticket
  const handleCreateTicket = (formData) => {
    const newTicket = {
      id: `TK-2025-00${sampleTickets.length + 1}`,
      subject: formData.subject,
      department: formData.department,
      status: 'Open',
      priority: formData.priority,
      created: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      messages: [
        {
          id: 1,
          sender: 'John Doe',
          senderType: 'student',
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
          content: formData.message,
          attachments: []
        }
      ]
    };
    
    setOpenTickets([newTicket, ...openTickets]);
    setActiveTicket(newTicket);
  };

  // Ticket status badge component
  const StatusBadge = ({ status }) => {
    if (status === 'Open') {
      return <Badge className="bg-orange-500">Open</Badge>;
    }
    if (status === 'In Progress') {
      return <Badge className="bg-blue-500">In Progress</Badge>;
    }
    return <Badge className="bg-green-500">Closed</Badge>;
  };

  // New ticket form component
  const NewTicketForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
      subject: '',
      department: '',
      priority: 'Medium',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
        onCancel();
      }, 1000);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief description of your issue or question"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <Select
                value={formData.department}
                onValueChange={(value) => setFormData({...formData, department: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Academic">Academic</SelectItem>
                  <SelectItem value="Financial Aid">Financial Aid</SelectItem>
                  <SelectItem value="Technical Support">Technical Support</SelectItem>
                  <SelectItem value="Academic Advising">Academic Advising</SelectItem>
                  <SelectItem value="Housing">Housing</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({...formData, priority: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your issue in detail"
              className="min-h-[120px]"
              required
            />
          </div>
        </div>
        
        <DialogFooter className="mt-6">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : 'Create Ticket'}
          </Button>
        </DialogFooter>
      </form>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Support Tickets</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-university-teal hover:bg-university-teal/90">
              <Plus size={16} className="mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Support Ticket</DialogTitle>
              <DialogDescription>
                Submit a new support ticket to get help from our staff.
              </DialogDescription>
            </DialogHeader>
            <NewTicketForm 
              onSubmit={handleCreateTicket}
              onCancel={() => document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
                new KeyboardEvent("keydown", { key: "Escape" })
              )}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          
          <Tabs defaultValue="open" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="open" className="text-sm">
                <Clock size={14} className="mr-2" />
                Open ({openTickets.length})
              </TabsTrigger>
              <TabsTrigger value="closed" className="text-sm">
                <CheckCircle size={14} className="mr-2" />
                Closed ({closedTickets.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="open" className="mt-4 space-y-2">
              {filterTickets(openTickets).length > 0 ? (
                filterTickets(openTickets).map(ticket => (
                  <Card 
                    key={ticket.id}
                    className={`cursor-pointer hover:shadow-md transition-shadow ${activeTicket?.id === ticket.id ? 'border-university-teal' : ''}`}
                    onClick={() => setActiveTicket(ticket)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-sm line-clamp-1">{ticket.subject}</h3>
                          <p className="text-xs text-gray-500">{ticket.id} • {ticket.department}</p>
                        </div>
                        <StatusBadge status={ticket.status} />
                      </div>
                      <div className="text-xs text-gray-500">
                        Last updated: {ticket.lastUpdated}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <AlertCircle className="mx-auto mb-2" size={24} />
                  <p>No tickets found</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="closed" className="mt-4 space-y-2">
              {filterTickets(closedTickets).length > 0 ? (
                filterTickets(closedTickets).map(ticket => (
                  <Card 
                    key={ticket.id}
                    className={`cursor-pointer hover:shadow-md transition-shadow ${activeTicket?.id === ticket.id ? 'border-university-teal' : ''}`}
                    onClick={() => setActiveTicket(ticket)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-sm line-clamp-1">{ticket.subject}</h3>
                          <p className="text-xs text-gray-500">{ticket.id} • {ticket.department}</p>
                        </div>
                        <StatusBadge status={ticket.status} />
                      </div>
                      <div className="text-xs text-gray-500">
                        Last updated: {ticket.lastUpdated}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <AlertCircle className="mx-auto mb-2" size={24} />
                  <p>No tickets found</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Chat/Ticket Details */}
        <div className="lg:col-span-2">
          {activeTicket ? (
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{activeTicket.subject}</CardTitle>
                    <CardDescription>
                      {activeTicket.id} • {activeTicket.department} • Priority: {activeTicket.priority}
                    </CardDescription>
                  </div>
                  <StatusBadge status={activeTicket.status} />
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow overflow-y-auto max-h-[500px] border-t border-b">
                <div className="space-y-4 p-2">
                  {activeTicket.messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.senderType === 'student' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`rounded-lg p-3 max-w-[80%] shadow-sm ${
                          message.senderType === 'student' 
                            ? 'bg-university-teal text-white rounded-br-none' 
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-sm">{message.sender}</span>
                          <span className="text-xs opacity-75">{message.timestamp}</span>
                        </div>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        {message.attachments && message.attachments.length > 0 && (
                          <div className="mt-2 space-y-1">
                            {message.attachments.map((attachment, idx) => (
                              <div key={idx} className="text-xs flex items-center">
                                <a 
                                  href={attachment.url} 
                                  className="underline flex items-center hover:opacity-75"
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                >
                                  {attachment.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4">
                {activeTicket.status !== 'Closed' ? (
                  <div className="w-full flex space-x-2">
                    <Textarea
                      placeholder="Type your message here..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="min-h-[60px] resize-none"
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      className="bg-university-teal hover:bg-university-teal/90 self-end"
                      disabled={!newMessage.trim() || isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send size={18} />
                      )}
                    </Button>
                  </div>
                ) : (
                  <div className="w-full text-center p-4 bg-gray-100 rounded-lg text-gray-500">
                    This ticket is closed. If you need further assistance, please create a new ticket.
                  </div>
                )}
              </CardFooter>
            </Card>
          ) : (
            <Card className="h-full flex flex-col justify-center items-center p-8">
              <MessageSquare size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Ticket Selected</h3>
              <p className="text-gray-500 text-center mb-6">
                Select a ticket from the list to view its details or create a new ticket to get support.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-university-teal hover:bg-university-teal/90">
                    <Plus size={16} className="mr-2" />
                    Create New Ticket
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create New Support Ticket</DialogTitle>
                    <DialogDescription>
                      Submit a new support ticket to get help from our staff.
                    </DialogDescription>
                  </DialogHeader>
                  <NewTicketForm 
                    onSubmit={handleCreateTicket}
                    onCancel={() => document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
                      new KeyboardEvent("keydown", { key: "Escape" })
                    )}
                  />
                </DialogContent>
              </Dialog>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTickets;
