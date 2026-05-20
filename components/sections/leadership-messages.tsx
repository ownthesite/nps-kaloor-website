import Image from "next/image";
import { FadeUp } from "@/components/animations/fade-up";
// Assuming FadeUp is imported from your animation library

export default function LeadershipMessages() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Optional: Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-slate-100/50 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Chairman Message */}
        <FadeUp>
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 hover:border-slate-300">
            {/* Animated subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start">
              
              {/* Passport Size Image Frame */}
              <div className="relative shrink-0 w-40 h-52 sm:w-44 sm:h-[230px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 ring-4 ring-slate-50 group-hover:ring-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100 z-0 text-sm text-center px-2">
                  Chairman Image
                </div>
                <Image
                  src="/management/te-bilal.jpeg"
                  alt="Chairman"
                  fill
                  className="object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Inner highlight for glass effect */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl z-20 pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center text-center sm:text-left flex-1">
                <div className="inline-flex w-fit mx-auto sm:mx-0 items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:bg-slate-200">
                  Chairman’s Message
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-black">
                  Leadership Rooted in Vision
                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                  National Public School Kaloor is committed to delivering
                  value-based education that inspires academic excellence,
                  discipline, character development, and holistic growth. We
                  believe every child deserves an environment that nurtures
                  curiosity, confidence, and lifelong learning.
                </p>
                
                {/* Decorative underline animation */}
                <div className="h-1 w-12 bg-slate-200 rounded-full mt-8 mx-auto sm:mx-0 transition-all duration-500 group-hover:w-24 group-hover:bg-slate-400" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Principal Message */}
        <FadeUp delay={0.15}>
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 hover:border-slate-300">
            {/* Animated subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Using flex-row-reverse for the second card to create a zig-zag layout pattern */}
            <div className="relative flex flex-col sm:flex-row-reverse gap-8 sm:gap-12 items-center sm:items-start">
              
              {/* Passport Size Image Frame */}
              <div className="relative shrink-0 w-40 h-52 sm:w-44 sm:h-[230px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 ring-4 ring-slate-50 group-hover:ring-slate-100">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100 z-0 text-sm text-center px-2">
                  Principal Image
                </div>
                {/* 
                <Image
                  src="/management/principal.jpeg"
                  alt="Principal"
                  fill
                  className="object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-110"
                /> 
                */}
                {/* Inner highlight for glass effect */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl z-20 pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center text-center sm:text-left flex-1">
                <div className="inline-flex w-fit mx-auto sm:mx-0 items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:bg-slate-200">
                  Principal’s Message
                </div>

                <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-black">
                  Empowering Future Generations
                </h2>

                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                  Education is not only about academic success but also about
                  nurturing values, creativity, communication, and confidence.
                  At NPS Kaloor, we strive to create a supportive environment
                  where students are encouraged to grow intellectually,
                  emotionally, and socially.
                </p>
                
                {/* Decorative underline animation */}
                <div className="h-1 w-12 bg-slate-200 rounded-full mt-8 mx-auto sm:mx-0 transition-all duration-500 group-hover:w-24 group-hover:bg-slate-400" />
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}