import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Intro and Buttons */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating responsive,
              accessible, and performant web applications using modern technologies.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly
              learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover bg-muted/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover bg-muted/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">UI/UX Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing user-centric interfaces that combine aesthetics and functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover bg-muted/5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">Project Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
