import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useLocalStorage } from "@uidotdev/usehooks";

import {
  Dropdown,
  dropdownMenuContentStyles,
  dropdownMenuItemStyles,
} from "../../components/Dropdown/Dropdown";
import { Language, convertLangCode, languages } from "../../utils";
import { selectLanguageStyles, wrapperStyles } from "./LangSelector.css";

export const LangSelector = () => {
  const [studyLang, setStudyLang] = useLocalStorage<Language>(
    "study-lang",
    "es",
  );
  const [baseLang, setBaseLang] = useLocalStorage<Language>("base-lang", "en");

  const handleSetStudyLang = (lang: Language) => {
    setStudyLang(lang);
  };

  const handleSetBaseLang = (lang: Language) => {
    setBaseLang(lang);
  };

  const baseDropdownContent = (
    <DropdownMenu.Content className={dropdownMenuContentStyles} sideOffset={5}>
      {languages.map((lang) => (
        <DropdownMenu.Item
          key={lang}
          className={dropdownMenuItemStyles}
          onClick={() => handleSetBaseLang(lang)}
        >
          {convertLangCode(lang)}
        </DropdownMenu.Item>
      ))}
    </DropdownMenu.Content>
  );

  const studyDropdownContent = (
    <DropdownMenu.Content className={dropdownMenuContentStyles} sideOffset={5}>
      {languages.map((lang) => (
        <DropdownMenu.Item
          key={lang}
          className={dropdownMenuItemStyles}
          onClick={() => handleSetStudyLang(lang)}
        >
          {convertLangCode(lang)}
        </DropdownMenu.Item>
      ))}
    </DropdownMenu.Content>
  );

  return (
    <div className={wrapperStyles}>
      <Dropdown content={studyDropdownContent}>
        <button className={selectLanguageStyles}>
          Language you learn: <b>{convertLangCode(studyLang)}</b>
        </button>
      </Dropdown>
      <Dropdown content={baseDropdownContent}>
        <button className={selectLanguageStyles}>
          Language you know: <b>{convertLangCode(baseLang)}</b>
        </button>
      </Dropdown>
    </div>
  );
};
