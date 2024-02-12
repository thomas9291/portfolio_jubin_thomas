import HomePagePart2 from "@/components/HomePagePart2";
import HomePagePart1 from "@/components/homePagePart1";
import MenuNavBar from "@/components/menuNavBar";
import HomePagePart3 from "@/components/homePagePart3";

export default function homePage() {
  return (
    <>
      <MenuNavBar />
      <HomePagePart1 />
      <div id="creativity">
        <HomePagePart2 />
      </div>
      <div id="blog">
        <HomePagePart3 />
      </div>
    </>
  );
}
