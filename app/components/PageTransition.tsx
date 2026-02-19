"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const fadeUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

const transition = {
	duration: 0.4,
	ease: [0.25, 0.46, 0.45, 0.94],
};

export function PageTransition({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="sync">
			<motion.div
				key={pathname}
				initial={fadeUp.initial}
				animate={fadeUp.animate}
				exit={fadeUp.exit}
				transition={transition}
				className="min-h-screen"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
