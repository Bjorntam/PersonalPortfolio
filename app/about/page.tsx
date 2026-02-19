import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navigation } from "../components/nav";
import { TableOfContents } from "../components/about/TableOfContents";
import { AnimatedSection } from "../components/AnimatedSection";
import { about, person, social } from "@/lib/about";
import styles from "../components/about/about.module.css";

export const metadata: Metadata = {
	title: about.title,
	description: about.description,
};

export default function AboutPage() {
	const structure = [
		{
			title: about.intro.title,
			display: about.intro.display,
			items: [] as string[],
		},
		{
			title: about.work.title,
			display: about.work.display,
			items: about.work.experiences.map((e) => e.company),
		},
		{
			title: about.studies.title,
			display: about.studies.display,
			items: about.studies.institutions.map((i) => i.name),
		},
		{
			title: about.technical.title,
			display: about.technical.display,
			items: about.technical.skills.map((s) => s.title),
		},
	];

	const essentialSocials = social.filter((s) => s.essential && s.link);

	return (
		<div className="min-h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<TableOfContents
				structure={structure}
				showTableOfContent={about.tableOfContent.display}
				showSubItems={about.tableOfContent.subItems}
			/>
			<div className="container mx-auto px-4 pt-32 pb-24 max-w-4xl">
				<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
					{about.avatar.display && (
						<AnimatedSection className="md:sticky md:top-24 flex-shrink-0 md:min-w-[160px] flex flex-col items-center gap-4 md:pb-8">
							<div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-zinc-700">
								<Image
									src={person.avatar}
									alt={person.name}
									fill
									className="object-cover"
									sizes="128px"
								/>
							</div>
							<div className="flex items-center gap-2 text-sm text-zinc-400">
								<span className="w-4 h-4 text-zinc-500" aria-hidden>
									📍
								</span>
								{person.location}
							</div>
							{person.languages && person.languages.length > 0 && (
								<div className="flex flex-wrap justify-center gap-2">
									{person.languages.map((lang, i) => (
										<span
											key={i}
											className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
										>
											{lang}
										</span>
									))}
								</div>
							)}
						</AnimatedSection>
					)}

					<main className="flex-1 min-w-0 max-w-2xl">
						<AnimatedSection>
						<section
							id={about.intro.title}
							className="min-h-[160px] flex flex-col justify-center mb-8"
						>
							{about.calendar.display && (
								<Link
									href={about.calendar.link}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center justify-between w-fit gap-2 px-4 py-2 mb-4 rounded-full border border-zinc-600/50 bg-zinc-800/50 backdrop-blur-sm ${styles.blockAlign}`}
								>
									<span className="text-sm text-zinc-300">Schedule a call</span>
									<ChevronRight className="w-4 h-4 text-zinc-500" />
								</Link>
							)}
							<h1
								className={`text-3xl md:text-4xl font-bold text-white font-display ${styles.textAlign}`}
							>
								{person.name}
							</h1>
							<p
								className={`text-lg text-zinc-400 mt-1 ${styles.textAlign}`}
							>
								{person.role}
							</p>
							{essentialSocials.length > 0 && (
								<div
									className={`flex flex-wrap justify-center md:justify-start gap-2 mt-5 pb-2 ${styles.blockAlign}`}
								>
									{essentialSocials.map((item) => {
										const Icon = item.icon;
										return (
											<Link
												key={item.name}
												href={item.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors"
											>
												<Icon className="w-4 h-4" />
												<span className="hidden sm:inline">{item.name}</span>
											</Link>
										);
									})}
								</div>
							)}
						</section>
						</AnimatedSection>

						{about.intro.display && (
							<AnimatedSection className="mb-12">
							<section>
								<p className="text-zinc-300 leading-relaxed">
									{about.intro.description}
								</p>
							</section>
							</AnimatedSection>
						)}

						{about.work.display && (
							<AnimatedSection className="mb-12">
							<section id={about.work.title}>
								<h2 className="text-xl font-semibold text-white mb-4 font-display">
									{about.work.title}
								</h2>
								<div className="flex flex-col gap-8">
									{about.work.experiences.map((exp, i) => (
										<article key={`${exp.company}-${i}`}>
											<div className="flex flex-wrap justify-between items-end gap-2 mb-1">
												<h3
													id={exp.company}
													className="text-lg font-semibold text-white"
												>
													{exp.company}
												</h3>
												<span className="text-sm text-zinc-500">
													{exp.timeframe}
												</span>
											</div>
											<p className="text-zinc-400 text-sm mb-4">{exp.role}</p>
											<ul className="space-y-4 list-disc list-inside text-zinc-300">
												{exp.achievements.map((a, j) => (
													<li key={j}>{a}</li>
												))}
											</ul>
											{exp.images &&
												exp.images.length > 0 && (
													<div className="flex flex-wrap gap-3 mt-4 pl-10">
														{exp.images.map(
															(
																img: {
																	src: string;
																	alt: string;
																	width: number;
																	height: number;
																},
																j: number
															) => (
																<div
																	key={j}
																	className="relative rounded-lg overflow-hidden border border-zinc-700"
																	style={{
																		aspectRatio: `${img.width}/${img.height}`,
																		minWidth: img.width * 16,
																	}}
																>
																	<Image
																		src={img.src}
																		alt={img.alt}
																		fill
																		className="object-cover"
																	/>
																</div>
															)
														)}
													</div>
												)}
										</article>
									))}
								</div>
							</section>
							</AnimatedSection>
						)}

						{about.studies.display && (
							<AnimatedSection className="mb-12">
							<section id={about.studies.title}>
								<h2 className="text-xl font-semibold text-white mb-4 font-display">
									{about.studies.title}
								</h2>
								<div className="flex flex-col gap-4">
									{about.studies.institutions.map((inst, i) => (
										<div key={i}>
											<h3
												id={inst.name}
												className="text-lg font-semibold text-white"
											>
												{inst.name}
											</h3>
											<p className="text-sm text-zinc-500 mt-1">
												{inst.description}
											</p>
										</div>
									))}
								</div>
							</section>
							</AnimatedSection>
						)}

						{about.technical.display && (
							<AnimatedSection className="mb-12">
							<section id={about.technical.title}>
								<h2 className="text-xl font-semibold text-white mb-8 font-display">
									{about.technical.title}
								</h2>
								<div className="flex flex-col gap-8">
									{about.technical.skills.map((skill, i) => (
										<div key={i}>
											<h3
												id={skill.title}
												className="text-lg font-semibold text-white mb-1"
											>
												{skill.title}
											</h3>
											{skill.description && (
												<p className="text-zinc-400 mb-2">{skill.description}</p>
											)}
											{skill.tags && skill.tags.length > 0 && (
												<div className="flex flex-wrap gap-2 pt-2">
													{skill.tags.map((tag, j) => (
														<span
															key={j}
															className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
														>
															{tag.name}
														</span>
													))}
												</div>
											)}
											{skill.images && skill.images.length > 0 && (
												<div className="flex flex-wrap gap-3 mt-4">
													{skill.images.map(
														(
															img: {
																src: string;
																alt: string;
																width: number;
																height: number;
															},
															j: number
														) => (
														<div
															key={j}
															className="relative rounded-lg overflow-hidden border border-zinc-700"
															style={{
																aspectRatio: `${img.width}/${img.height}`,
																minWidth: img.width * 16,
															}}
														>
															<Image
																src={img.src}
																alt={img.alt}
																fill
																className="object-cover"
															/>
														</div>
														)
													)}
												</div>
											)}
										</div>
									))}
								</div>
							</section>
							</AnimatedSection>
						)}
					</main>
				</div>
			</div>
		</div>
	);
}
