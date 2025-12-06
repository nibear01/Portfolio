import { Code2, Database, TestTube, Wrench } from "lucide-react";

const skills = [
  {
    category: "Languages & Core",
    icon: Code2,
    items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Code2,
    items: ["React.js", "Tailwind CSS", "Responsive Design", "Framer Motion"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Auth"],
  },
  {
    category: "Testing & Tools",
    icon: TestTube,
    items: ["Python Selenium", "Git", "GitHub", "Postman", "VS Code"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Passionate <span className="gradient-text">Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Full stack developer with hands-on experience in MERN stack and test engineering. 
            I create responsive, user-friendly interfaces while ensuring software quality through automated testing.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "5+", label: "Projects Completed" },
            { value: "2", label: "Certifications" },
            { value: "100%", label: "Passion" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-secondary/50"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
