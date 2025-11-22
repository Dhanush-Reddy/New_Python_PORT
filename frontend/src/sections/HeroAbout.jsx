import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Cloud, Activity, Code2, Server, Cpu } from 'lucide-react';
import { Button, Badge, Card } from '../components/ui';
import { personalInfo } from '../data/content';

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge className="bg-primary/10 text-primary border border-primary/20">Python Backend Engineer</Badge>
                        <Badge variant="outline">FastAPI</Badge>
                        <Badge variant="outline">AWS</Badge>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Building <span className="text-gradient">scalable APIs</span> & <br />
                        healthcare platforms
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                        {personalInfo.bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight size={18} />
                        </Button>
                        <Button variant="outline" onClick={() => window.open(personalInfo.socials.find(s => s.name === 'Resume').url, '_blank')}>
                            Download Resume <Download size={18} />
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Visual - Floating Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative hidden lg:block h-[400px]"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 z-20"
                    >
                        <Card className="w-64 backdrop-blur-md border-primary/20">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Server size={20} /></div>
                                <div>
                                    <div className="font-bold">API Status</div>
                                    <div className="text-xs text-green-500">● Systems Operational</div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-muted rounded w-3/4" />
                                <div className="h-2 bg-muted rounded w-1/2" />
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 z-10"
                    >
                        <Card className="w-64 backdrop-blur-md border-blue-500/20">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Database size={20} /></div>
                                <div>
                                    <div className="font-bold">Database</div>
                                    <div className="text-xs text-muted-foreground">PostgreSQL Connected</div>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                                <div className="h-1 w-1 bg-blue-500 rounded-full" />
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Code2 className="text-primary" /> About Me
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {personalInfo.about}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { icon: Terminal, label: "Clean Code", desc: "Maintainable & Scalable" },
                                { icon: Activity, label: "Performance", desc: "Optimized Systems" },
                                { icon: Database, label: "Architecture", desc: "Robust Data Design" },
                                { icon: Cloud, label: "DevOps", desc: "CI/CD & Cloud Native" }
                            ].map((item, i) => (
                                <Card key={i} className="p-4 border-primary/10 hover:border-primary/30">
                                    <item.icon className="text-primary mb-2" size={24} />
                                    <div className="font-bold">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Terminal Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-white/10 font-mono text-sm">
                            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="ml-2 text-xs text-gray-400">dhanush@portfolio:~/skills</div>
                            </div>
                            <div className="p-6 text-gray-300 space-y-4">
                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">whoami</span>
                                </div>
                                <div className="pl-4 text-gray-400">
                                    "Passionate Backend Engineer focused on building robust systems."
                                </div>

                                <div>
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">ls skills/backend</span>
                                </div>
                                <div className="pl-4 grid grid-cols-2 gap-x-8 gap-y-1 text-gray-400">
                                    <span>Python</span>
                                    <span>FastAPI</span>
                                    <span>Django</span>
                                    <span>PostgreSQL</span>
                                    <span>Docker</span>
                                    <span>AWS</span>
                                </div>

                                <div className="animate-pulse">
                                    <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="inline-block w-2 h-4 bg-gray-500 align-middle ml-1" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
