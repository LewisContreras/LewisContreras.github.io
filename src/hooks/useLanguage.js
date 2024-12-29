import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider";

export const useLanguage = () => useContext(LanguageContext);
