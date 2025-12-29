import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    badge: "Cloud",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    badge: "Development",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2023",
    badge: "Analytics",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "2023",
    badge: "AI/ML",
  },
];

const CertificatesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is at the heart of my journey. Here are some of my professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={cert.title}
              variant="elevated"
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <Badge variant="secondary">{cert.badge}</Badge>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;