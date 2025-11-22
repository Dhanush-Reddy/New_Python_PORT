import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2";
    const variants = {
        primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border hover:bg-accent hover:text-accent-foreground backdrop-blur-sm"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export const Card = ({ children, className, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn("glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const Badge = ({ children, className, variant = 'primary' }) => {
    const variants = {
        primary: "bg-secondary text-secondary-foreground",
        secondary: "bg-primary/10 text-primary border border-primary/20",
        outline: "border border-border text-muted-foreground"
    };

    return (
        <span className={cn("px-3 py-1 rounded-full text-xs font-medium transition-colors", variants[variant], className)}>
            {children}
        </span>
    );
};

export const Modal = ({ isOpen, onClose, title, children }) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-xl shadow-2xl p-6 md:p-8"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold leading-tight pr-8">{title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                    </button>
                </div>
                {children}
            </motion.div>
        </div>
    );
};

export const Logo = () => (
    <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight cursor-pointer group">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-black/10 rounded-xl" />
            <span className="font-mono text-lg relative z-10">&gt;_</span>
        </div>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:to-primary transition-all duration-300">
            K Dhanush
        </span>
    </div>
);

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"
