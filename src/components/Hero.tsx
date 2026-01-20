import { Database, Cpu, Network } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <AnimatedBackground />

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-500">
              <Database className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <svg className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-32 h-1" style={{ overflow: 'visible' }}>
              <line
                x1="0"
                y1="0"
                x2="128"
                y2="0"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="4 4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="8"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </line>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-500">
              <Cpu className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-1/5 transform translate-x-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-500">
              <Network className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/10">
              <div className="flex items-center space-x-1">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-500 border-b-8 border-b-transparent"></div>
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-400 border-b-8 border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
          Stride AI
        </h1>

        <div className="mb-12">
          <div className="inline-block bg-gradient-to-r from-gray-800/5 via-blue-500/10 to-gray-800/5 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-200/50 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-700 font-light tracking-wide">
              Transforming Business Through Intelligent Solutions
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg">
            Learn More
          </button>
        </div>

        <div className="mt-20 flex items-center justify-center space-x-8 opacity-40">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gray-400"></div>
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            Trusted by Industry Leaders
          </p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gray-400"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
