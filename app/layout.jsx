import Provider from "@components/Provider";
import Nav from "@components/Nav";

import "@styles/globals.css";

export const metadata = {
  title: "Prompts Hub Application",
  description: "Create and share your AI prompts!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
