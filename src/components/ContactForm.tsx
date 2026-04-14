import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({ from_name: '', from_email: '', message: '' });
  const { toast } = useToast();

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeevqbvr';

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Sanitize inputs (remove HTML/script, limit length)
    const sanitizedName = formData.from_name.trim().replace(/[<>]/g, '').slice(0, 100);
    const sanitizedEmail = formData.from_email.trim().slice(0, 100);
    const sanitizedMessage = formData.from_message.trim().replace(/[<>]/g, '').slice(0, 2000);
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      toast({
        title: "Error",
        description: "Please fill all fields.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    if (!validateEmail(sanitizedEmail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const fd = new FormData();
      fd.append('from_name', sanitizedName);
      fd.append('from_email', sanitizedEmail);
      fd.append('message', sanitizedMessage);
      // Honeypot (spam trap)
      fd.append('_gotcha', '');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: fd,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Message sent successfully. I'll get back to you soon!",
        });
        // formRef.current.reset(); // Removed as form state managed manually
        setFormData({ from_name: '', from_email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Honeypot field for spam protection - hidden from humans */}
      <input type="text" name="_gotcha" value="" style={{display: 'none'}} aria-hidden="true" tabIndex={-1} />
      <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
          Name *
        </label>
          <input
          id="name"
          type="text"
          placeholder="Full Name"
          required
          value={formData.from_name}
          onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:bg-muted disabled:text-muted-foreground"
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
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all disabled:bg-muted disabled:text-muted-foreground"
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
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary resize-vertical transition-all disabled:bg-muted disabled:text-muted-foreground"
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

