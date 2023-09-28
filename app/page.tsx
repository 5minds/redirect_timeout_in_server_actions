import { redirect } from "next/navigation";
import Form from "./form";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  async function redirectToOtherPage() {
    "use server";
    console.log('do somthing');
  }
  return <Form redirectToPage={redirectToOtherPage}></Form>
}
