import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  // Tell Chakra how to detect modes
  conditions: {
    // Chakra uses "base" and "_dark" in tokens; map _dark to .dark class (next-themes default)
    colorModes: {
      selector: ".dark &, [data-theme='dark'] &", // dark
      fallback: ":root &"                          // light/base
    }
  },
  theme: {
    tokens: {
      colors: {
        accent1: { value: "#F39C12" },
        accent2: { value: "#8E44AD" },
        hoverOrange: { value: "#E67E22" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: { base: "#FCF8E3", _dark: "#1E2A38" } },
        bgAlt: { value: { base: "#FAF5DC", _dark: "#192330" } },
        bgOp:{ value: { base: "#1E2A38", _dark: "#FCF8E3" } },
        fg: { value: { base: "{colors.text}", _dark: "{colors.text}" } },
        text: { value: { base: "#2C3E50", _dark: "#FCF8E3" } },
        textStrong: { value: { base: "#1A2B3A", _dark: "#FCF8E3" } },
        link: { value: { base: "#8E44AD", _dark: "#8E44AD" } },
        linkHover: { value: { base: "#E67E22", _dark: "#E67E22" } },
        accent: { value: { base: "#F39C12", _dark: "#F39C12" } },
        panel: { value: { base: "#FAF5DC", _dark: "#223244" } },
        border: { value: { base: "#E6DFC3", _dark: "#2A394A" } },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);
export default system;