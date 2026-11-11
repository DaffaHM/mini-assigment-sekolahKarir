"use client";

import { cn } from "@/lib/utils";
import { 
  AnimatePresence, 
  motion, 
  Variants,
  TargetAndTransition,
  useReducedMotion,
  HTMLMotionProps
} from "motion/react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant = 
  | "fadeIn" 
  | "blurIn" 
  | "blurInUp" 
  | "blurInDown" 
  | "slideUp" 
  | "slideDown" 
  | "slideLeft" 
  | "slideRight" 
  | "scaleUp" 
  | "scaleDown";

type SupportedAsTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

interface TextAnimateProps extends Omit<HTMLMotionProps<"span">, "children" | "variants"> {
  /** The text content to animate */
  children: string;
  /** The delay before the animation starts (in seconds) */
  delay?: number;
  /** Total duration of the animation sequence (in seconds) */
  duration?: number;
  /** Custom motion variants for container and items */
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  /** Additional CSS classes for wrapper */
  className?: string;
  /** Additional CSS classes for each split segment */
  segmentClassName?: string;
  /** HTML element type to render as */
  as?: SupportedAsTag;
  /** Granularity of text splitting */
  by?: AnimationType;
  /** Predefined animation style */
  animation?: AnimationVariant;
  /** Whether to start animation when entering viewport */
  startOnView?: boolean;
  /** Whether animation should only happen once */
  once?: boolean;
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: "blur(10px)", y: 20, transition: { duration: 0.3 } },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: "blur(10px)", y: -20, transition: { duration: 0.3 } },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
      exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
      exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
};

const motionTagMap = {
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  div: motion.div,
} as const;

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as = "span",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = (motionTagMap[as] || motion.span) as React.ElementType;

  const selectedVariants = defaultItemAnimationVariants[animation] || defaultItemAnimationVariants.fadeIn;
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 }, exit: { opacity: 1 } }
    : variants?.item || selectedVariants.item;

  if (by === "character") {
    const words = children.split(/(\s+)/);
    let charIndex = 0;
    const totalChars = children.length;

    const baseTransition = (containerVariants.show as TargetAndTransition | undefined)?.transition;
    const modifiedContainerVariants: Variants = shouldReduceMotion
      ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
      : {
          ...containerVariants,
          show: {
            ...containerVariants.show,
            transition: {
              ...(typeof baseTransition === "object" ? baseTransition : {}),
              delayChildren: delay,
              staggerChildren: duration / (totalChars || 1),
            },
          },
        };

    return (
      <AnimatePresence mode="popLayout">
        <MotionComponent
          variants={modifiedContainerVariants}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView={startOnView && !shouldReduceMotion ? "show" : undefined}
          animate={!startOnView || shouldReduceMotion ? "show" : undefined}
          viewport={{ once }}
          className={cn("inline", className)}
          {...props}
        >
          {words.map((word, wIdx) => {
            if (/^\s+$/.test(word)) {
              return (
                <span key={`space-${wIdx}`} className="whitespace-pre">
                  {word}
                </span>
              );
            }

            return (
              <span key={`word-${wIdx}`} className="inline-block whitespace-nowrap">
                {word.split("").map((char) => {
                  const currentIdx = charIndex++;
                  return (
                    <motion.span
                      key={`char-${currentIdx}`}
                      variants={itemVariants}
                      className={cn("inline-block", segmentClassName)}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            );
          })}
        </MotionComponent>
      </AnimatePresence>
    );
  }

  let segments: string[] = [];
  if (by === "word") {
    segments = children.split(/(\s+)/);
  } else if (by === "line") {
    segments = children.split("\n");
  } else {
    segments = [children];
  }

  const baseTransition = (containerVariants.show as TargetAndTransition | undefined)?.transition;
  const modifiedContainerVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        ...containerVariants,
        show: {
          ...containerVariants.show,
          transition: {
            ...(typeof baseTransition === "object" ? baseTransition : {}),
            delayChildren: delay,
            staggerChildren: duration / (segments.length || 1),
          },
        },
      };

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={modifiedContainerVariants}
        initial={shouldReduceMotion ? "show" : "hidden"}
        whileInView={startOnView && !shouldReduceMotion ? "show" : undefined}
        animate={!startOnView || shouldReduceMotion ? "show" : undefined}
        viewport={{ once }}
        className={cn("inline", className)}
        {...props}
      >
        {segments.map((segment, index) => (
          <motion.span
            key={`${by}-${segment}-${index}`}
            variants={itemVariants}
            className={cn(
              "inline-block",
              segment === " " ? "whitespace-pre" : "",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}
