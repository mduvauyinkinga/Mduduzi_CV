import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const experiences = [
{ year: "Present", role: "Aspiring Full Stack Developer", company: "Mduvauyinkinga Studio", description: "Learning full stack development through personal projects and building my first portfolio website." },
{ year: "2023 — Present", role: "Frontend Developer", company: "Tech Startup", description: "Developed responsive UIs and integrated APIs." },
{ year: "2023 — 2025", role: "Junior Developer", company: "Digital Agency", description: "Created websites and learned modern web technologies." }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">Background & Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm an aspiring developer at the start of my journey, learning the foundations of clean code and creative design. With each project I take on, I'm building my skills step by step — from simple web pages to more dynamic applications. My focus is on learning, experimenting, and improving every day, with the goal of becoming one of the best in the field. I may be a beginner now, but I'm driven by curiosity, persistence, and a passion for turning ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> eMalahleni, Mpumalanga
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" /> Dip Computer Science
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> Open to Work
              </span>
            </div>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-border pl-5 hover:border-primary transition-colors"
              >
                <p className="text-primary text-xs font-display tracking-wider">{exp.year}</p>
                <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                <p className="text-muted-foreground text-sm">{exp.company} — {exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

