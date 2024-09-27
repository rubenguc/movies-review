import { useTranslation } from "react-i18next";
import { GoogleButton } from "./components";
import { useLogin } from "./hooks";
import { Button } from "@headlessui/react";
import { Link } from "@tanstack/react-router";

export default function Login() {
  const { t } = useTranslation("login");

  const { onLogin } = useLogin();

  return (
    <div className="flex items-center justify-center flex-1 flex-col ">
      <div className="w-fit border rounded p-3">
        <h2 className="text-center mb-4">{t("login_title")}</h2>
        <div className="flex flex-col">
          <GoogleButton onClick={onLogin} text={t("login_with_google")} />
        </div>
        <hr className="w-full my-6" />

        <div className="flex flex-col gap-2">
          <div>
            <label>{t("email")}</label>
            <input className="block w-full ps-10 p-2 rounded-lg border" />
          </div>
          <div>
            <label>{t("password")}</label>
            <input className="block w-full ps-10 p-2 rounded-lg border" />
          </div>
          <Button className="w-full rounded-full border p-2 mt-4">
            {t("login")}
          </Button>

          <div className="flex items-center gap-3 mt-10">
            <span>{t("dont_you_have_account")}</span>
            <Link to="/signup">{t("signup")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
