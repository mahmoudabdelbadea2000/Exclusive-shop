import { useTranslation } from "react-i18next";
import { z } from "zod";

export const GlobalSchema = () => {
  const { t } = useTranslation("global");

  const signInSchema = z.object({
    username: z
      .string()
      .min(2, {
        message: t("validation.name.min"),
      })
      .max(30, {
        message: t("validation.name.max"),
      }),
    email: z
      .string({
        required_error: t("validation.email"),
      })
      .email(),
    password: z.string().min(6, {
      message: t("validation.password"),
    }),
  });

  const loginSchema = z.object({
    email: z
      .string({
        required_error: t("validation.email"),
      })
      .email(),
    password: z.string().min(6, {
      message: t("validation.password"),
    }),
  });

  return { signInSchema, loginSchema };
};
