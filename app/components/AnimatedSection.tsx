"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

const defaultVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export function AnimatedSection({
	children,
	className = "",
	delay = 0,
}: AnimatedSectionProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={{
				...defaultVariants,
				visible: {
					...defaultVariants.visible,
					transition: {
						...defaultVariants.visible.transition,
						delay,
					},
				},
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
