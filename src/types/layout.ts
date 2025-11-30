export interface BaseLayoutProps {
	title: string;
	description: string;
	lang: string;
	navBrand: string;
	navLinks: {
		services: string;
		about: string;
		contact: string;
	};
	footerCopyright: string;
	footerLinks?: {
		home: string;
		services: string;
		about: string;
		contact: string;
		resume: string;
	};
	footerSocial?: {
		linkedin: string;
		github: string;
		whatsapp: string;
	};
	themeToggleLabel: string;
}
