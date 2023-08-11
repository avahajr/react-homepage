import { createMedia } from "@artsy/fresnel";
import MobileHomepage from "./components/MobileHomepage";
import DesktopHomepage from "./components/DesktopHomepage";

function App() {
  const { MediaContextProvider, Media } = createMedia({
    // breakpoints values can be either strings or integers
    breakpoints: {
      xs: 0,
      sm: 768,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });

  return (
    <MediaContextProvider>
      <Media at="xs">
        {/* Mobile app */}
        <MobileHomepage />
      </Media>
      <Media greaterThan="xs">
        {/* Desktop app, which is already built */}
        <DesktopHomepage />
      </Media>
    </MediaContextProvider>
  );
}

export default App;
