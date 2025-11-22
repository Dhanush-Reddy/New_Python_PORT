import React from 'react';
import { motion } from 'framer-motion';
import { Card, Badge } from '../components/ui';
import { skills, experience } from '../data/content';

export const TechStack = () => {
    return (
        <section id="stack" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <Card key={category} className="h-full">
                            <h3 className="text-xl font-semibold mb-4 capitalize">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <Badge key={skill} className="bg-secondary/50 hover:bg-secondary transition-colors">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-accent/5">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Experience</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <div className="w-3 h-3 bg-primary rounded-full" />
                            </div>

                            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                                <div className="flex flex-col sm:flex-row justify-between mb-2">
                                    <h3 className="font-bold text-lg">{job.role}</h3>
                                    <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">{job.period}</span>
                                </div>
                                <p className="text-primary font-medium mb-2">{job.company}</p>
                                <p className="text-muted-foreground">{job.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
