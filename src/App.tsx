import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MantineProvider } from "@mantine/core";
import Layout from "./routes";
import { RootState } from "./redux/store"; // Adjust the import path if necessary
import { theme } from "./styles/theme";
import { messages } from "./translations";
import { IntlProvider } from "react-intl";
// import "react-toastify/dist/ReactToastify.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import { toggleLang } from "./redux/slices/settingsSlice";

function App() {
  /* ----------------------------- Redux Dispatch ---------------------------- */
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  /* --------------------------------- Effects -------------------------------- */
  useLayoutEffect(() => {
    const cookieLang = settings.lang;
    document.documentElement.lang = cookieLang || "ar";
    if (cookieLang) {
      dispatch(toggleLang({ lang: cookieLang as "ar" | "en" }));
    }
  }, [settings.lang]);

  return (
    <>
      <IntlProvider
        locale={settings?.lang}
        messages={messages[settings?.lang as "ar" | "en"]}
      >
        <MantineProvider
          theme={theme}
          defaultColorScheme={settings?.theme === "light" ? "light" : "dark"}
        >
          <Layout />
        </MantineProvider>
      </IntlProvider>
    </>
  );
}

export default App;
