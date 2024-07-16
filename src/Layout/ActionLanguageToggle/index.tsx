// import React from "react";

import { ActionIcon, Group, Tooltip } from "@mantine/core";
import FlagAR from "assets/images/svg/FlagAR.svg?react";
import FlagEN from "assets/images/svg/FlagEN.svg?react";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleLang } from "../../redux/slices/settingsSlice";
import { useIntl } from "react-intl";

function ActionLanguageToggle() {
  const { formatMessage } = useIntl();

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
    <Group justify='center'>
      <Tooltip label={formatMessage({ id: "lang" })}>
        <ActionIcon
          onClick={() =>
            dispatch(
              toggleLang({ lang: settings?.lang === "en" ? "ar" : "en" })
            )
          }
          variant='default'
          size='xl'
          aria-label='Toggle language scheme'
        >
          {settings?.lang === "ar" && (
            <>
              <FlagEN />
            </>
          )}
          {settings?.lang === "en" && (
            <>
              <FlagAR />
            </>
          )}
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}

export default ActionLanguageToggle;