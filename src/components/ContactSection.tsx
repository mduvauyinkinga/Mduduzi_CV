import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
{ icon: Mail, href: "mailto:dnmduduzi@gmail.com", label: "Email" },
{ icon: Github, href: "https://github.com/mduvauyinkinga", label: "GitHub" },
{ icon: Linkedin, href: "https://www.linkedin.com/in/mduduzi-nwobodo", label: "LinkedIn" },

];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="flex justify-center gap-6 flex-wrap">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border w-14 h-14 rounded-xl flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

import ContactForm from './ContactForm';

export default ContactSection;
