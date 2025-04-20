import FooterPage from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div>
        <div className="min-h-screen ">
          <Navbar />
        
          {children}
        </div>
        <div>
          <FooterPage />
   
        </div>
      </div>
    );
};

export default MainLayout;