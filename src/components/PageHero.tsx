import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  description: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export function PageHero({
  label,
  title,
  titleAccent,
  description,
  backgroundImage,
  backgroundAlt,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
      {/* Background Image - Sharp on right side */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover scale-105"
        />

        {/* Premium left-to-right gradient overlay matching Home hero */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(220 50% 8% / 0.92) 0%, hsl(220 50% 8% / 0.85) 30%, hsl(220 50% 8% / 0.60) 55%, hsl(220 50% 8% / 0.35) 75%, hsl(220 50% 8% / 0.15) 100%)",
          }}
        />

        {/* Subtle top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/50" />

        {/* Blur overlay on left text area with feathered edge */}
        <div
          className="absolute inset-y-0 left-0 w-[55%]"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            maskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
          }}
        />

        {/* Animated accent line at bottom */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange-light to-transparent origin-left"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Section label with orange accent */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="section-label text-orange-light">
              <span className="w-12 h-0.5 bg-gradient-to-r from-orange to-orange-light" />
              {label}
            </span>
          </motion.div>

          {/* Bold headline matching Home hero typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="heading-page text-white mb-6 drop-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              {title}
            </motion.span>
            {titleAccent && (
              <>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="inline-block bg-clip-text text-transparent drop-shadow-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(28 90% 58%) 0%, hsl(24 95% 53%) 50%, hsl(20 95% 48%) 100%)",
                  }}
                >
                  {titleAccent}
                </motion.span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-large text-white/85 max-w-2xl drop-shadow-md leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
