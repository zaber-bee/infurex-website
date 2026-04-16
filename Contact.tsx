import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Calendar, Upload, X } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    await emailjs.send(
      'service_21npmzu',
      'template_5zbmsye',
      {
        full_name: formData.name,
        email_address: formData.email,
        phone: formData.phone,
        company: formData.company,
        project_type: formData.projectType,
        budget: formData.budget,
        project_details: formData.message,
      },
      'rSA0KPYLisZtA9Qbp'
    );
    toast.success("Thanks! We'll review your inquiry and reply within 1 business day.");
    setFormData({ name: '', email: '', phone: '', company: '', projectType: '', budget: '', message: '' });
    setUploadedFiles([]);
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
  }
  setIsSubmitting(false);
};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const validFiles = files.filter(file => {
        const isValidType = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'].includes(file.type);
        const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
        if (!isValidType) {
          toast.error(`${file.name} is not a valid file type. Please upload PDF, PNG, or JPG files.`);
        }
        if (!isValidSize) {
          toast.error(`${file.name} is too large. Maximum file size is 10MB.`);
        }
        return isValidType && isValidSize;
      });
      setUploadedFiles(validFiles);
      if (validFiles.length > 0) {
        toast.success(`${validFiles.length} file(s) uploaded successfully`);
      }
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      const validFiles = files.filter(file => {
        const isValidType = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'].includes(file.type);
        const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
        if (!isValidType) {
          toast.error(`${file.name} is not a valid file type. Please upload PDF, PNG, or JPG files.`);
        }
        if (!isValidSize) {
          toast.error(`${file.name} is too large. Maximum file size is 10MB.`);
        }
        return isValidType && isValidSize;
      });
      setUploadedFiles(validFiles);
      if (validFiles.length > 0) {
        toast.success(`${validFiles.length} file(s) uploaded successfully`);
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    toast.success('File removed');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#0B1120' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-gold tracking-wider text-sm mb-4 block">GET IN TOUCH</span>
          <h2 className="text-white mb-6">
            Ready to Elevate Your Real Estate Brand?
          </h2>
          <p className="text-white/70 text-lg">
            Let's discuss your project and create a website that drives results. Fill out the form or book a call directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-neutral-900 to-black border border-gold/20 rounded-2xl p-8 space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-white text-sm mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white focus:border-gold"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white text-sm mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 text-white focus:border-gold"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-white text-sm mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-white/10 text-white focus:border-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-white text-sm mb-2 block">
                    Agency/Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-black/50 border-white/10 text-white focus:border-gold"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="text-white text-sm mb-2 block">
                    Project Type *
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-gold">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="seo">SEO & Marketing</SelectItem>
                      <SelectItem value="full-package">Complete Package</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="budget" className="text-white text-sm mb-2 block">
                    Budget (Optional)
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-gold">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                      <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-white text-sm mb-2 block">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-white/10 text-white focus:border-gold min-h-32"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="text-white text-sm mb-2 block">
                  Attachments (Optional)
                </label>
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className={`block border-2 border-dashed rounded-lg p-6 text-center hover:border-gold/30 transition-colors cursor-pointer ${
                    isDragging ? 'border-gold/30 bg-gold/5' : 'border-white/10'
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-white/60 text-sm">Click to upload or drag and drop</p>
                  <p className="text-white/40 text-xs mt-1">PDF, PNG, JPG up to 10MB</p>
                </label>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-black/30 border border-white/10 rounded-lg p-3"
                      >
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <div className="w-8 h-8 bg-gold/10 rounded flex items-center justify-center flex-shrink-0">
                            <Upload className="w-4 h-4 text-gold" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-white/70 text-sm truncate">{file.name}</p>
                            <p className="text-white/40 text-xs">
                              {(file.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-2 p-1 hover:bg-red-500/20 rounded transition-colors flex-shrink-0"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Privacy Note */}
              <p className="text-white/40 text-xs">
                By submitting this form, you agree to our privacy policy. We'll never share your information. 
                Figma Make is not intended for collecting PII or securing sensitive data.
              </p>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-black transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-gold/20 rounded-2xl p-6 space-y-6">
              <h3 className="text-white">Quick Contact</h3>
              
              <div className="space-y-4">
                <a href="mailto:infurexmarketing@gmail.com" className="flex items-center space-x-3 text-white/70 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Email</div>
                    <div>infurexmarketing@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+8801757553238" className="flex items-center space-x-3 text-white/70 hover:text-gold transition-colors group">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Phone</div>
                    <div>+880 1757 553 238</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-white/70">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-1">Office</div>
                    <div>Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Call CTA */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/30 rounded-2xl p-6">
              <Calendar className="w-8 h-8 text-gold mb-3" />
              <h3 className="text-white mb-2">Prefer to Talk?</h3>
              <p className="text-white/60 text-sm mb-4">
                Schedule a free 30-minute consultation to discuss your project.
              </p>
              <Button
                onClick={() => window.open('https://calendly.com/jmd868046/new-meeting', '_blank')}
                className="w-full bg-gold hover:bg-gold-dark text-black"
              >
                Book a Call
              </Button>
            </div>

            {/* Response Time */}
            <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="text-gold mb-1">⚡ Fast Response</div>
              <p className="text-white/60 text-sm">We typically reply within 1 business day</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
