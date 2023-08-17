import ProvidersWrapper from "./ProvidersWrapper";
import Nav from "./Nav";
import "./globals.css";

export const metadata = {
  title: "Immersive Digital Experience Management [IDEM]",
  description: "Digital space for immersive and personalized customer experiences",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Server Components",
    "NextUI",
    "NextAuth",
    "Prisma",
    "PostgreSQL",
    "OpenAI",
    "GPT",
    "Stripe",
  ],
  authors: [
    {
      name: "Founding Developer",
      url: "https://github.com/single-pane",
    },
  ],
  creator: "Fouding Developer",
  publisher: "Kernel Domain Inc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>
          <Nav />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
