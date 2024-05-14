import { UI_ES, UI_EN } from "../assets/data";

const LANGUAGES = {
  ES: "es",
  EN: "en",
};

export const getI18N = (currentLocale: string) => {
  if (currentLocale === LANGUAGES.ES) return UI_ES;
  if (currentLocale === LANGUAGES.EN) return UI_EN;
};
