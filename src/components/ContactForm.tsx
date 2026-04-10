import { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface EmailJSData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<EmailJSData>({ from_name: '', from_email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',  // e.g. 'service_abc123'
        'YOUR_TEMPLATE_ID', // e.g. 'template_def456'
        formData as Record<string, unknown>,
        'YOUR_PUBLIC_KEY'   // e.g. 'user_ghi789'
      );
      toast({
        title: "Success!",
        description: "Message sent successfully. I'll get back to you soon!",
      });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
          <input
          id="name"
          type="text"
          placeholder="Full Name"
          required
          value={formData.from_name}
          onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
          <input
          id="email"
          type="email"
placeholder="Enter Email"
          required
          value={formData.from_email}
          onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What would you like me to do for you?"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
          disabled={loading}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-all"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;

