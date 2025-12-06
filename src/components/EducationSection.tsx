import { Award, BookOpen, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    period: "Sep 2022 – Present",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Adamjee Cantonment College, Dhaka",
    period: "2021",
    gpa: "GPA: 5.00",
    icon: BookOpen,
  },
];

const certifications = [
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "Dec 2024",
  },
  {
    name: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "Sep 2024",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group"
                >
                  {edu.current && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Current
                    </span>
                  )}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <edu.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{edu.period}</span>
                        {edu.gpa && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            <span className="text-primary font-medium">
                              {edu.gpa}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary flex items-center justify-center shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
