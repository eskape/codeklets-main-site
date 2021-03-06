import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";

export default function Layout({ preview, children }) {
  return (
    <div className="flex flex-col antialiased min-h-screen">
      <Meta />
      <header className="bg-gray-800 w-full">
        <div className="max-w-5xl mx-auto px-1 sm:px-4 xl:max-w-6xl xl:px-0">
          <Nav></Nav>
        </div>
      </header>
      <div className="flex-grow max-w-5xl mx-auto px-1 sm:px-4 xl:max-w-6xl xl:px-0">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
