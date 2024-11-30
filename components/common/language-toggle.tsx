import { useLanguage } from "@/app/providers/language-privder";
import Button from "./button";
import { queryClient } from "@/api/query-client";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => {
    const lang = language === "mn" ? "en" : "mn";
    setLanguage(lang);
    localStorage.setItem("language", lang);
    queryClient.invalidateQueries();
  };

  return (
    <Button onClick={changeLanguage} href="#">
      EN/MN
    </Button>
  );
};

export default LanguageSwitcher;
