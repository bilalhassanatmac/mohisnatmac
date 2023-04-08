import { HeroSection, SupportSection, PortfolioSection, ServiceSection, ProjectsSection, FooterSection } from "./containers/index";
import { Navbar } from "./components/index";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SupportSection/>
      {/* <PortfolioSection/> */}
      <ServiceSection/>
      <ProjectsSection/>
      <FooterSection/>
    </div>
  )
}

export default App;
