"use server";

import { cookies } from "next/headers";

export const setThemeCookie = async (theme: string) => {
  const cookieStore = cookies();
  cookieStore.set("theme", theme);
};
