import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  videoUrl?: string;
  liveUrl?: string;
  thumbnailColor: string;
}

const projects: Project[] = [
  {
    title: "Smokey Dreamz - NEW CONCEPT",
    description: "A full-stack solution with Map Embedded Information on Location, real-time inventory management, payment processing.",
    tags: ["React", "Node.js", "TypeScript JSX"],
    videoUrl: "C:/Users/dnmdu/Documents/Smokey Dreamz/public/images/Smokey Dreamz.mp4",
    liveUrl: "https://example.com",
    thumbnailColor: "from-amber-500/20 to-orange-600/20",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["TypeScript", "Next.js", "Supabase"],
videoUrl: "/videos/Smokey Dreamz.mp4",
    liveUrl: "https://example.com",
    thumbnailColor: "from-blue-500/20 to-cyan-600/20",
  },
  {
    title: "Portfolio Website",
    description: "A beautifully designed personal portfolio with smooth animations and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://example.com",
    thumbnailColor: "from-purple-500/20 to-pink-600/20",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card border border-border rounded-xl overflow-hidden group hover:glow-accent transition-all duration-500"
    >
      {/* Video / Thumbnail area */}
      <div className={`relative aspect-video bg-gradient-to-br ${project.thumbnailColor} flex items-center justify-center`}>
{showVideo && project.videoUrl ? (
          project.videoUrl.endsWith('.mp4') ? (
 <video
              src={project.videoUrl}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              title={project.title}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video> 
          ) : (
            <iframe
              src={project.videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          )
        ) : (
          <>
            <span className="font-display text-2xl font-bold opacity-20">{project.title}</span>
            {project.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 ml-0.5" />
                </div>
              </button>
            )}
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display font-bold text-xl">{project.title}</h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-70 transition-opacity shrink-0 ml-3"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-secondary text-xs px-2.5 py-1 rounded-md font-body text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-3">Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
