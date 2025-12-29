import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, BadgeCheck } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shirazisohail.md",
    href: "mailto:shirazisohail.md@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 74161 96198",
    href: "tel:+917416196198",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, Thane, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sohail-shirazi-180mss7/",
    color: "hover:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/imsohail07",
    color: "hover:text-foreground",
  },
  {
    icon: Twitter,
    label: "X",
    href: "#",
    color: "hover:text-sky-500",
  },
  {
	icon: Instagram,
	label: "Instagram",
	href: "https://instagram.com/your_username",
	color: "hover:text-pink-500",
  },
  {
	icon: BadgeCheck,
	label: "Credly",
	href: "https://www.credly.com/users/shirazi",
	color: "hover:text-emerald-500",
  },

];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card variant="elevated" className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-lg bg-secondary text-muted-foreground transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
