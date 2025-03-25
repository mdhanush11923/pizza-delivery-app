import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");

  if (typeof term !== "string" || !term) {
    console.log(term)
    redirect("/");
  }

  redirect(`/search?term=${term}`);

}