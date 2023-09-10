import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
