import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Mail, User, MessageSquare, FileText, Send, Loader2 } from 'lucide-react';

export const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: ""
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }
    
    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    }
    
    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      Toast.fire({
        icon: "error",
        title: "Please fix the form errors",
        background: "#ef4444",
        color: "#fff"
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_dbvy41w",
        "template_b2fzyfh",
        {
          to_email: formData.email,
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        {
          publicKey: "TdpAl7R-CphAOIxi6",
        }
      );

      Toast.fire({
        icon: "success",
        title: "Message sent successfully!",
        background: "#22c55e",
        color: "#fff"
      });

      setFormData({
        email: "",
        name: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: "Failed to send message",
        text: error.message,
        background: "#ef4444",
        color: "#fff"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="m-auto px-4 mt-4 mb-8 max-w-3xl" id="connectMe">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
        <Mail className="w-8 h-8" />
        Contact Form
      </h1>
      
      <form ref={form} onSubmit={handleSubmit} className="mt-10">
        <div className="container mx-auto space-y-6">
          {/* Email Input */}
          <div className="w-full sm:w-[60%] mx-auto">
            <label htmlFor="email" className="flex items-center gap-2 text-white font-bold mb-2">
              <Mail className="w-4 h-4" />
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-black py-3 px-4 rounded-md border-2 focus:border-blue-500 focus:outline-none transition-colors"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Name Input */}
          <div className="w-full sm:w-[60%] mx-auto">
            <label htmlFor="name" className="flex items-center gap-2 text-white font-bold mb-2">
              <User className="w-4 h-4" />
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full bg-black py-3 px-4 rounded-md border-2 focus:border-blue-500 focus:outline-none transition-colors"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Subject Input */}
          <div className="w-full sm:w-[60%] mx-auto">
            <label htmlFor="subject" className="flex items-center gap-2 text-white font-bold mb-2">
              <FileText className="w-4 h-4" />
              Subject:
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter message subject"
              required
              className="w-full bg-black py-3 px-4 rounded-md border-2 focus:border-blue-500 focus:outline-none transition-colors"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message Input */}
          <div className="w-full sm:w-[60%] mx-auto">
            <label htmlFor="message" className="flex items-center gap-2 text-white font-bold mb-2">
              <MessageSquare className="w-4 h-4" />
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full bg-black py-3 px-4 rounded-md border-2 focus:border-blue-500 focus:outline-none transition-colors h-[200px] resize-y"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="w-full sm:w-[60%] mx-auto">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 text-white py-3 px-6 rounded-full transition-all duration-200 ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 active:scale-95"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;