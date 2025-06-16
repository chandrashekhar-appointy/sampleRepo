import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import "./globals.css";

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
	<Navbar
		logo={
			<img src="/images/general/logo.svg" alt="Logo" width={250} height={50} />
		}
		// ... Your additional navbar options
	/>
);
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({ children }) {
	const session = await auth();
	return (
		<html
			// Not required, but good for SEO
			lang="en"
			// Required to be set
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head
			// ... Your additional head options
			>
				<link rel="shortcut icon" href="/images/general/icon.svg" />
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				{session ? (
					<Layout
						navbar={navbar}
						pageMap={await getPageMap()}
						docsRepositoryBase="https://github.com/AppointyTech/docs/tree/main"
						footer={footer}
						// ... Your additional layout options
					>
						{children}
					</Layout>
				) : (
					<SignIn />
				)}
			</body>
		</html>
	);
}
