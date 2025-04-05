
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  AlertCircle, 
  Calendar, 
  Clock, 
  Download, 
  Eye, 
  FileText, 
  Loader2, 
  Receipt, 
  Upload, 
  CheckCircle, 
  XCircle
} from 'lucide-react';
import { toast } from 'sonner';

// Sample payment data
const samplePayments = [
  {
    id: 'PMT-2025-001',
    description: 'Fall 2025 Tuition Fee',
    amount: 4500.00,
    dueDate: '2025-07-15',
    status: 'Pending',
    paymentType: 'Tuition',
    term: 'Fall 2025',
    receiptUrl: null
  },
  {
    id: 'PMT-2025-002',
    description: 'Student Activity Fee',
    amount: 250.00,
    dueDate: '2025-07-15',
    status: 'Paid',
    paymentType: 'Fee',
    term: 'Fall 2025',
    paidDate: '2025-03-20',
    receiptUrl: '/receipts/pmt-2025-002.pdf',
    confirmationNumber: 'TXN-87654321',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'PMT-2025-003',
    description: 'Library Fine',
    amount: 25.00,
    dueDate: '2025-04-10',
    status: 'Overdue',
    paymentType: 'Fine',
    term: 'Spring 2025',
    receiptUrl: null
  },
  {
    id: 'PMT-2024-004',
    description: 'Spring 2025 Tuition Fee',
    amount: 4500.00,
    dueDate: '2025-01-15',
    status: 'Paid',
    paymentType: 'Tuition',
    term: 'Spring 2025',
    paidDate: '2025-01-10',
    receiptUrl: '/receipts/pmt-2024-004.pdf',
    confirmationNumber: 'TXN-12345678',
    paymentMethod: 'Bank Transfer'
  }
];

const DashboardPayments = () => {
  const [payments, setPayments] = useState(samplePayments);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadData, setUploadData] = useState({
    paymentId: '',
    paymentMethod: '',
    transactionId: '',
    paymentDate: '',
    notes: '',
    file: null
  });

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadData({
        ...uploadData,
        file: e.target.files[0]
      });
    }
  };

  // Initialize upload dialog with payment data
  const initializeUpload = (payment) => {
    setSelectedPayment(payment);
    setUploadData({
      paymentId: payment.id,
      paymentMethod: '',
      transactionId: '',
      paymentDate: new Date().toISOString().split('T')[0],
      notes: '',
      file: null
    });
  };

  // Handle payment slip upload
  const handleUploadSlip = () => {
    if (!uploadData.file) {
      toast.error('Please select a payment slip to upload');
      return;
    }
    
    if (!uploadData.paymentMethod) {
      toast.error('Please select a payment method');
      return;
    }
    
    setIsUploading(true);
    
    // Simulate API call to upload payment slip
    setTimeout(() => {
      // Update payment status
      const updatedPayments = payments.map(payment => {
        if (payment.id === selectedPayment.id) {
          return {
            ...payment,
            status: 'Verification Pending',
            receiptUrl: URL.createObjectURL(uploadData.file),
            paidDate: uploadData.paymentDate,
            confirmationNumber: uploadData.transactionId,
            paymentMethod: uploadData.paymentMethod
          };
        }
        return payment;
      });
      
      setPayments(updatedPayments);
      setIsUploading(false);
      
      // Close dialog and show success message
      document.querySelector("[data-state='open'][role='dialog']")?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape" })
      );
      
      toast.success('Payment slip uploaded successfully. It will be verified by our finance team.');
    }, 2000);
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    switch (status) {
      case 'Paid':
        return <Badge className="bg-green-500">Paid</Badge>;
      case 'Verification Pending':
        return <Badge className="bg-blue-500">Verification Pending</Badge>;
      case 'Overdue':
        return <Badge className="bg-red-500">Overdue</Badge>;
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>;
    }
  };

  // Group payments by term
  const paymentsByTerm = payments.reduce((acc, payment) => {
    if (!acc[payment.term]) {
      acc[payment.term] = [];
    }
    acc[payment.term].push(payment);
    return acc;
  }, {});

  // Sort terms chronologically (most recent first)
  const sortedTerms = Object.keys(paymentsByTerm).sort().reverse();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Payments & Fees</h1>
        <div>
          <Button variant="outline" className="mr-2">
            <Download size={16} className="mr-2" />
            Payment History
          </Button>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Payments</p>
                <p className="text-2xl font-bold">
                  {payments.filter(p => p.status === 'Pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <AlertCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Overdue Payments</p>
                <p className="text-2xl font-bold">
                  {payments.filter(p => p.status === 'Overdue').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Paid Payments</p>
                <p className="text-2xl font-bold">
                  {payments.filter(p => p.status === 'Paid' || p.status === 'Verification Pending').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Payment Slip Dialog */}
      <Dialog>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Upload Payment Slip</DialogTitle>
            <DialogDescription>
              Upload a payment slip or receipt to confirm your payment for {selectedPayment?.description}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Payment Method
                </label>
                <Select 
                  value={uploadData.paymentMethod}
                  onValueChange={(value) => setUploadData({...uploadData, paymentMethod: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                    <SelectItem value="Credit Card">Credit Card</SelectItem>
                    <SelectItem value="Debit Card">Debit Card</SelectItem>
                    <SelectItem value="Cash Deposit">Cash Deposit</SelectItem>
                    <SelectItem value="Online Payment">Online Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Payment Date
                </label>
                <Input 
                  type="date" 
                  value={uploadData.paymentDate}
                  onChange={(e) => setUploadData({...uploadData, paymentDate: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Transaction ID / Reference Number
              </label>
              <Input 
                placeholder="Enter transaction ID or reference number"
                value={uploadData.transactionId}
                onChange={(e) => setUploadData({...uploadData, transactionId: e.target.value})}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Additional Notes (Optional)
              </label>
              <Textarea 
                placeholder="Any additional information about your payment"
                value={uploadData.notes}
                onChange={(e) => setUploadData({...uploadData, notes: e.target.value})}
                className="resize-none min-h-[80px]"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Upload Payment Slip
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 focus-within:border-university-teal transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="sr-only"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm font-medium text-gray-700">
                      {uploadData.file ? uploadData.file.name : 'Click to upload payment slip'}
                    </span>
                    <span className="text-xs text-gray-500 mt-1">
                      {!uploadData.file && 'Supports PDF, JPG, PNG up to 5MB'}
                    </span>
                  </div>
                </label>
              </div>
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
              onClick={handleUploadSlip} 
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
                  Upload Slip
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Details Dialog */}
      <Dialog>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
            <DialogDescription>
              Detailed information about this payment.
            </DialogDescription>
          </DialogHeader>
          
          {selectedPayment && (
            <div className="space-y-4 py-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <h3 className="text-lg font-semibold">{selectedPayment.description}</h3>
                <StatusBadge status={selectedPayment.status} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Payment ID</p>
                  <p className="font-medium">{selectedPayment.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="font-medium">${selectedPayment.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Due Date</p>
                  <p className="font-medium">{selectedPayment.dueDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Term</p>
                  <p className="font-medium">{selectedPayment.term}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Type</p>
                  <p className="font-medium">{selectedPayment.paymentType}</p>
                </div>
              </div>
              
              {selectedPayment.status === 'Paid' && (
                <>
                  <div className="pt-2 border-t">
                    <h4 className="text-sm font-semibold mb-2">Payment Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Payment Date</p>
                        <p className="font-medium">{selectedPayment.paidDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Method</p>
                        <p className="font-medium">{selectedPayment.paymentMethod}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Confirmation #</p>
                        <p className="font-medium">{selectedPayment.confirmationNumber}</p>
                      </div>
                    </div>
                  </div>
                  
                  {selectedPayment.receiptUrl && (
                    <div className="pt-2">
                      <a
                        href={selectedPayment.receiptUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-university-teal hover:underline"
                      >
                        <FileText size={16} className="mr-2" />
                        View Receipt
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Payment List */}
      <div className="space-y-8">
        {sortedTerms.map(term => (
          <Card key={term}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-university-blue">
                {term} Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentsByTerm[term].map(payment => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>{payment.description}</TableCell>
                      <TableCell>${payment.amount.toFixed(2)}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>
                        <StatusBadge status={payment.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <DialogTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedPayment(payment)}
                            >
                              <Eye size={16} />
                            </Button>
                          </DialogTrigger>
                          
                          {(payment.status === 'Pending' || payment.status === 'Overdue') && (
                            <DialogTrigger asChild>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => initializeUpload(payment)}
                              >
                                <Upload size={16} />
                              </Button>
                            </DialogTrigger>
                          )}
                          
                          {payment.status === 'Paid' && payment.receiptUrl && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              asChild
                            >
                              <a
                                href={payment.receiptUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FileText size={16} />
                              </a>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPayments;
