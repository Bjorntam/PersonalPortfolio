"use client";

import React from "react";

interface TableOfContentsProps {
	structure: {
		title: string;
		display: boolean;
		items: string[];
	}[];
	showTableOfContent: boolean;
	showSubItems?: boolean;
}

export function TableOfContents({
	structure,
	showTableOfContent,
	showSubItems = false,
}: TableOfContentsProps) {
	const scrollTo = (id: string, offset: number) => {
		const element = document.getElementById(id);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	if (!showTableOfContent) return null;

	return (
		<nav
			className="fixed left-0 top-1/2 -translate-y-1/2 pl-6 hidden md:flex flex-col gap-8 whitespace-nowrap z-10"
			aria-label="Table of contents"
		>
			{structure
				.filter((section) => section.display)
				.map((section, sectionIndex) => (
					<div key={sectionIndex} className="flex flex-col gap-3">
						<button
							type="button"
							onClick={() => scrollTo(section.title, 80)}
							className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-transform duration-200 hover:translate-x-1 cursor-pointer text-left group"
						>
							<span className="h-px w-4 min-w-4 bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
							{section.title}
						</button>
						{showSubItems &&
							section.items.map((item, itemIndex) => (
								<button
									type="button"
									key={itemIndex}
									onClick={() => scrollTo(item, 80)}
									className="hidden lg:flex items-center gap-3 pl-6 text-sm text-zinc-500 hover:text-zinc-300 transition-transform duration-200 hover:translate-x-1 cursor-pointer text-left group"
								>
									<span className="h-px w-2 min-w-2 bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
									{item}
								</button>
							))}
					</div>
				))}
		</nav>
	);
}
