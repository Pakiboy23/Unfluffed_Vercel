import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ChevronLeft, Send, Mail, Phone, MapPin, Instagram, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call to your backend
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", formState);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      setError("There was an error submitting your message. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <div className="bg-[#0A0A0A] py-10 mb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold font-montserrat uppercase text-center">
              Contact <span className="text-neon">Us</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Questions, feedback, or just want to tell us what product to test next? 
              We're here for all of it.
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg mb-6">
                <h2 className="text-xl font-bold font-montserrat uppercase mb-6">
                  Get In <span className="text-neon">Touch</span>
                </h2>
                
                <div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-neon mr-3 mt-0.5" />
                    <div>
                      <p className="font-bold">Email</p>
                      <a href="mailto:hello@unfluffed.com" className="text-gray-300 hover:text-neon">
                        hello@unfluffed.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#121212] rounded-lg p-6 border border-[#1A1A1A] shadow-lg">
                <h2 className="text-xl font-bold font-montserrat uppercase mb-6">
                  Follow <span className="text-neon">Us</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-[#1A1A1A] p-4 rounded-lg hover:bg-[#252525] transition-colors"
                  >
                    <Instagram className="h-8 w-8 text-neon mb-2" />
                    <span className="text-sm">@unfluffed.gear</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center bg-[#1A1A1A] p-4 rounded-lg hover:bg-[#252525] transition-colors"
                  >
                    <Twitter className="h-8 w-8 text-neon mb-2" />
                    <span className="text-sm">@unfluffed</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-[#121212] rounded-lg p-6 md:p-8 border border-[#1A1A1A] shadow-lg">
                <h2 className="text-xl font-bold font-montserrat uppercase mb-6">
                  Send Us A <span className="text-neon">Message</span>
                </h2>
                
                {submitted ? (
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-4">
                      Thanks for reaching out! We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#1A1A1A] text-white px-4 py-2 rounded-md font-medium hover:bg-[#252525] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
                        <p className="text-red-300">{error}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[#1A1A1A] border border-[#333] rounded-md p-3 text-white focus:ring-2 focus:ring-neon focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[#1A1A1A] border border-[#333] rounded-md p-3 text-white focus:ring-2 focus:ring-neon focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-md p-3 text-white focus:ring-2 focus:ring-neon focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Suggestion">Product Suggestion</option>
                        <option value="Kit Feedback">Kit Feedback</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full bg-[#1A1A1A] border border-[#333] rounded-md p-3 text-white focus:ring-2 focus:ring-neon focus:border-transparent"
                        placeholder="Tell us what's on your mind..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto flex items-center justify-center"
                        disabled={submitting}
                      >
                        {submitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
