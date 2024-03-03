export type Language =
  | "en"
  | "fr"
  | "zh"
  | "es"
  | "he"
  | "de"
  | "pt"
  | "ja"
  | "it"
  | "ar"
  | "ko"
  | "uk"
  | "pl";

export const languages: Language[] = [
  "en",
  "fr",
  "zh",
  "es",
  "he",
  "de",
  "pt",
  "ja",
  "it",
  "ar",
  "ko",
  "uk",
  "pl",
];

export const convertLangCode = (langCode: Language) => {
  let result = "";

  switch (langCode) {
    case "en":
      result = "English";
      break;
    case "fr":
      result = "French";
      break;
    case "zh":
      result = "Chinese";
      break;
    case "es":
      result = "Spanish";
      break;
    case "he":
      result = "Hebrew";
      break;
    case "de":
      result = "German";
      break;
    case "pt":
      result = "Portuguese";
      break;
    case "ja":
      result = "Japanese";
      break;
    case "it":
      result = "Italian";
      break;
    case "ar":
      result = "Arabic";
      break;
    case "ko":
      result = "Korean";
      break;
    case "uk":
      result = "Ukrainian";
      break;
    case "pl":
      result = "Polish";
      break;
  }

  return result;
};
