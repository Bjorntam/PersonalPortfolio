import React from "react";
import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const person = {
	name: "Ingemar Bjorn",
	role: "Full Stack / Unity Developer",
	avatar: "https://github.com/bjorntam.png",
	email: "Ingemarbjorn.r@gmail.com",
	location: "Philippines",
	languages: [,"Filipino", "Bicolano","English"],
} as const;

export const social: Array<{
	name: string;
	icon: LucideIcon;
	link: string;
	essential?: boolean;
}> = [
	{
		name: "Twitter",
		icon: Twitter,
		link: "https://twitter.com/chronark_",
		essential: true,
	},
	{
		name: "GitHub",
		icon: Github,
		link: "https://github.com/chronark",
		essential: true,
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		link: "https://linkedin.com",
		essential: false,
	},
	{
		name: "Email",
		icon: Mail,
		link: `mailto:${person.email}`,
		essential: true,
	},
];

export const about = {
	path: "/about",
	label: "About",
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role}. Building digital experiences from the ground up.`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: false,
		link: "https://cal.com",
	},
	intro: {
		display: true,
		title: "Introduction",
		description: (
			<>
				Full-Stack and Unity Developer with hands-on experience building Android educational games and 
				supporting web applications. Strong foundation in React, TypeScript, Firebase, and Unity. 
				Experienced in developing scalable systems from concept to deployment with a focus on clean 
				architecture and user-centered design.
			</>
		),
	},
	work: {
		display: true,
		title: "Work Experience",
		experiences: [
			{
				company: "ValACE",
				timeframe: "June 2025 – December 2025",
				role: "Web App Developer | Game Developer",
				achievements: [
					"Developed ValPLAY, an Android educational platform featuring interactive tracing and shape-recognition games (Unity + Firebase).",
					"Built and maintained a Web MS supporting the game database",
					"Provided on-site IT technical support and system troubleshooting.",
				],
				images: [  
					{
					src: "/images/ojt-img.jpg",
					alt: "Ojt Img 1",
					width: 16,
					height: 9,
				  },
				  {
					src: "/images/ojt-img2.jpg",
					alt: "Ojt Img 2",
					width: 16,
					height: 9,
				  },],
			},
			{
				company: "Lemonyito Franchise",
				timeframe: "June 2024 – September 2024",
				role: "Graphic Designer | Social Media Manager | Inventory Manager",
				achievements: [
					"Produced daily social media content and promotional graphics",
					"Managed real-time communications with customers and franchisees",
					"Handled inventory management and stock control",
				],
				images: [					
					{
					src: "/images/lemon-1.png",
					alt: "lemon Img 1",
					width: 16,
					height: 9,
					},
				  	{
					src: "/images/lemon-2.png",
					alt: "lemon Img 2",
					width: 16,
					height: 9,
				  	},],
			},
		],
	},
	studies: {
		display: true,
		title: "Education",
		institutions: [
			{
				name: "Pamantasan ng Lungsod ng Valenzuela",
				description: "Bachelor of Science in Information Technology",
			},
		],
	},
	technical: {
		display: true,
		title: "Technical Skills",
		skills: [
			{
				title: "Game Development",
				description: "Skilled in end-to-end Unity 2D game development, from conceptualizing gameplay systems and mechanics to refining UI/UX for an optimized player experience.",
				tags: [{ name: "Unity" }, { name: "C#" }],
				images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
			},
			{
				title: "Backend & Database",
				description: "Experienced with Firebase for user authentication, real-time database, and Firestore integration.",
				tags: [{ name: "Firebase" }, { name: "Upstash" }, { name: "Sql" }],
				images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
			},
			{
				title: "Web Development",
				description: "Experienced in building responsive web applications within a Visual Studio Code environment.",
				tags: [{ name: "React" }, { name: "Vite" }, { name: "TypeScript" }, { name: "Tailwind" }, { name: "Next.js" }],
				images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
			},
			{
				title: "UI/UX Design",
				description: "Experienced in designing interactive prototypes, wireframes, and high-quality graphic assets to build cohesive user interfaces and layouts.",
				tags: [{ name: "Figma" }, { name: "Adobe Photoshop" }, { name: "Canva" }],
				images: [] as Array<{ src: string; alt: string; width: number; height: number }>,
			},
		],
	},
} as const;
