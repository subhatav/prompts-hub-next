import "@styles/globals.css";

export const metadata = {
  title: "Prompts Hub Application",
  description: "Create and share your AI prompts!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
