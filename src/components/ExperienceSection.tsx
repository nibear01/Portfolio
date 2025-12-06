import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "imranslab",
    location: "Dhaka, Bangladesh",
    period: "Sep 2025 – Dec 2025",
    description: [
      "Assisted in developing web applications using MERN stack, following software engineering principles",
      "Gained hands-on experience in test engineering and automated testing with Python Selenium",
      "Collaborated on version control workflows using Git and GitHub for efficient code management",
      "Applied software engineering best practices including code reviews, debugging, and optimization",
      "Supported the team in designing and implementing user-friendly frontend interfaces",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">History</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world experience through internships and hands-on projects
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

              <div className={`md:flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 group">
                    {exp.current && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4 flex-wrap justify-start md:justify-end">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                          <span className="text-left">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>

                {/* Date */}
                <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </div>
                </div>
              </div>

              {/* Mobile date */}
              <div className="md:hidden flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={14} className="text-primary" />
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
