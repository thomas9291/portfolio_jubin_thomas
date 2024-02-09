import HomePagePart2 from "@/components/HomePagePart2";
import HomePagePart1 from "@/components/homePagePart1";
import MenuNavBar from "@/components/menuNavBar";

export default function homePage() {
  return (
    <>
      <MenuNavBar />
      <HomePagePart1 />
      <HomePagePart2 />
    </>
  );
}
