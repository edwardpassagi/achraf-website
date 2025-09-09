'use client'

import { motion } from 'framer-motion'

export default function Home() {

    return (
        <main className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
            {/* Full Screen Background Pattern */}
            <motion.div
                className="fixed inset-0 pointer-events-none -z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
            >
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="dots" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="1.5" fill="currentColor" />
                        </pattern>
                        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="white" stopOpacity="0" />
                            <stop offset="15%" stopColor="white" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="white" stopOpacity="1" />
                            <stop offset="85%" stopColor="white" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-slate-300" opacity="0.15" />
                    <rect width="100%" height="100%" fill="url(#dots)" className="text-blue-200" opacity="0.1" />
                    <rect width="100%" height="100%" fill="url(#fadeGradient)" />
                </svg>
            </motion.div>

            <div className="max-w-4xl w-full">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

                    {/* Animated Background Blobs */}
                    <motion.div
                        className="absolute top-32 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 0.15,
                            scale: 1,
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{
                            opacity: { duration: 1.5, delay: 1.5 },
                            scale: { duration: 1.5, delay: 1.5 },
                            x: { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 },
                            y: { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }
                        }}
                    />
                    <motion.div
                        className="absolute bottom-32 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 0.15,
                            scale: 1,
                            x: [0, -50, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            opacity: { duration: 1.5, delay: 2 },
                            scale: { duration: 1.5, delay: 2 },
                            x: { duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                            y: { duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
                        }}
                    />

                    {/* Geometric Shapes */}
                    <motion.div
                        className="absolute top-20 right-1/4 w-16 h-16 border border-blue-200 opacity-20"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{
                            opacity: 0.2,
                            rotate: 360
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 3 },
                            rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: 3 }
                        }}
                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    />

                    <motion.div
                        className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-100 opacity-15"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 0.15,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 3.5 },
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }
                        }}
                    />

                    <motion.div
                        className="absolute top-1/3 left-20 w-8 h-8 border-2 border-blue-300 rounded-full opacity-20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 4.5
                        }}
                    />

                    {/* Circuit-like Lines */}
                    <motion.svg
                        className="absolute top-1/4 right-10 w-32 h-32 opacity-10"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 0.1, pathLength: 1 }}
                        transition={{ duration: 3, delay: 5 }}
                        viewBox="0 0 100 100"
                    >
                        <motion.path
                            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-blue-400"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 3, delay: 5 }}
                        />
                        <circle cx="50" cy="50" r="3" fill="currentColor" className="text-blue-400" />
                        <circle cx="90" cy="10" r="2" fill="currentColor" className="text-blue-400" />
                        <circle cx="10" cy="90" r="2" fill="currentColor" className="text-blue-400" />
                    </motion.svg>
                </div>

                {/* Main Content */}
                <div className="relative z-10 text-center">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-1"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="w-full h-full bg-white rounded-full p-1">
                                    <motion.img
                                        src="/images/mo-avatar.jpg"
                                        alt="Mohamed A. Belakhoua"
                                        className="w-full h-full object-cover rounded-full"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="mb-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-gradient">Mohamed A.</span>
                            <br />
                            <span className="text-slate-700">Belakhoua</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center justify-center gap-3 mb-6"
                        >
                            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-20"></div>
                            <span className="text-lg md:text-xl text-slate-600 font-medium">
                                Embedded Engineer
                            </span>
                            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1 max-w-20"></div>
                        </motion.div>
                    </motion.div>

                    {/* Company Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-blue-100">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-slate-700 font-semibold text-lg">OmniOn Power</span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Crafting innovative embedded solutions that bridge the gap between
                        <span className="text-gradient font-semibold"> hardware and software</span>,
                        driving technological advancement in industrial automation.
                    </motion.p>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get In Touch
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/90 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-300"
                        >
                            View Projects
                        </motion.button>
                    </motion.div>

                    {/* Floating Elements - Delayed */}
                    <motion.div
                        className="absolute top-1/4 left-1/6 w-1 h-1 bg-blue-300 rounded-full opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0.6, 0.4],
                            y: [0, -15, 0]
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 6 },
                            y: { duration: 4, repeat: Infinity, delay: 6 }
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0.6, 0.4],
                            y: [0, -12, 0]
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 6.5 },
                            y: { duration: 5, repeat: Infinity, delay: 6.5 }
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-blue-200 rounded-full opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.4, 0.6, 0.4],
                            y: [0, -18, 0]
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 7 },
                            y: { duration: 6, repeat: Infinity, delay: 7 }
                        }}
                    />
                </div>
            </div>

            {/* Subtle Copyright Notice */}
            <motion.div
                className="fixed bottom-4 right-4 text-xs text-slate-400 opacity-60 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 8 }}
            >
                <span className="font-light">
                    Created by{' '}
                    <span className="font-medium text-slate-500"><a href="https://epassagi.com">Edward Passagi</a></span>
                    {' '}• Next.js & Tailwind CSS
                </span>
            </motion.div>
        </main>
    )
}