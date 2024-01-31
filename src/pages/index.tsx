import Moon from "@/components/moon";
import LogoHomePage from "@/components/logoHomePage";

export default function homePage() {
  return (
    <div className="homePageContainer">
      <div className="homepage-part1">
        <div className="moon">
          <Moon />
        </div>
        <div className="logoContainer">
          <LogoHomePage />
        </div>
      </div>
    </div>
  );
}
