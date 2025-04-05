
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Studying at Future Spark University has been transformative. The professors are experts in their fields and genuinely care about student success.",
    author: "Sarah Johnson",
    role: "Computer Science Graduate, 2024",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    quote: "The practical learning opportunities and industry connections helped me secure my dream job before graduation. I couldn't recommend this university more!",
    author: "Michael Chen",
    role: "Business Administration Graduate, 2023",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
  {
    id: 3,
    quote: "The support systems and inclusive community at Future Spark made my international student experience incredibly valuable both academically and personally.",
    author: "Aisha Patel",
    role: "Environmental Science Student, 3rd Year",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-university-blue py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Testimonials</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Hear from our students about their experiences at Future Spark University.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
              <Quote size={32} className="text-university-teal mb-4 opacity-80" />
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
