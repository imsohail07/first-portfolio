import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "EcoTrack - Carbon Footprint Monitor",
    description: "A mobile-first web application that helps users track and reduce their carbon footprint. Features include daily activity logging, personalized recommendations, and community challenges.",
    technologies: ["React", "Node.ts", "MongoDB", "Chart.ts"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "StudyBuddy AI",
    description: "An AI-powered study assistant that creates personalized flashcards and quizzes from uploaded course materials. Implemented using OpenAI's API with intelligent spaced repetition algorithms.",
    technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "DevConnect",
    description: "A social networking platform for developers to share projects, collaborate, and find mentors. Features real-time messaging and project matching algorithms.",
    technologies: ["Next.ts", "Prisma", "WebSocket", "Tailwind CSS"],
    github: "#",
    live: null,
    featured: false,
  },
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization tool for common sorting and pathfinding algorithms. Helps students understand algorithm complexity through animated step-by-step execution.",
    technologies: ["TypeScript", "React", "Framer Motion"],
    github: "#",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              variant={project.featured ? "elevated" : "gradient"}
              className="group animate-fade-up overflow-hidden"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Folder className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;