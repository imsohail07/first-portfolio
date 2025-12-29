import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const references = [
  {
    name: "Dr. Sarah Chen",
    title: "Professor of Computer Science",
    organization: "Stanford University",
    quote: "Sohail is one of the most dedicated students I've had the pleasure of mentoring. Their ability to grasp complex concepts and apply them creatively is exceptional.",
    email: "s.chen@stanford.edu",
  },
  {
    name: "Michael Torres",
    title: "Senior Software Engineer",
    organization: "Google",
    quote: "During their internship, Sohail demonstrated outstanding problem-solving skills and a genuine passion for clean, maintainable code. I highly recommend them.",
    email: "m.torres@google.com",
  },
  {
    name: "Emily Watson",
    title: "Tech Lead",
    organization: "Startup Labs",
    quote: "Sohail's contribution to our open-source project was invaluable. They brought fresh ideas and executed them with precision. A true team player.",
    email: "emily@startuplabs.io",
  },
];

const ReferencesSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimonials from professors, mentors, and colleagues I've had the privilege to work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <Card
              key={ref.name}
              variant="gradient"
              className="animate-fade-up relative"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="pb-4">
                <Quote className="w-8 h-8 text-primary/30" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 italic leading-relaxed">
                  "{ref.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold font-heading">{ref.name}</p>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                  <p className="text-sm text-primary">{ref.organization}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 inline-block"
                  >
                    {ref.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;