import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Send, CheckCircle, AlertCircle, Check, Info, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Card, Button, Badge, Modal } from '../components/ui';
import { projects } from '../data/content';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full group border-primary/10 hover:border-primary/30">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="text-primary shrink-0 mt-1" size={16} />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.modalContent.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Architecture & Tech Stack</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.modalContent.architecture.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 p-2 rounded-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Functional Scope</h3>
                <ul className="space-y-2">
                  {selectedProject.modalContent.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Achievements & Impact</h3>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <ul className="space-y-2">
                    {selectedProject.modalContent.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                        <span className="text-primary">🚀</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));

      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log(result.text);
      setStatus('success');
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Interested in working together? Have a question? Send me a message and I'll get back to you as soon as possible.
        </p>

        <Card className="text-left backdrop-blur-xl bg-background/50 border-primary/10">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Hello, I'd like to discuss..."
              />
            </div>

            <Button type="submit" className="w-full py-4" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </Button>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-3 p-4 rounded-lg border bg-green-50/80 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 backdrop-blur-sm"
              >
                <CheckCircle size={20} className="shrink-0" /> 
                <span className="font-medium">Message sent successfully!</span>
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex items-center gap-3 p-4 rounded-lg border bg-red-50/80 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20 backdrop-blur-sm"
              >
                <AlertCircle size={20} className="shrink-0" /> 
                <span className="font-medium">Failed to send message. Please try again.</span>
              </motion.div>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
};
