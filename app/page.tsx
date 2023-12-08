import {Button} from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <h1 className="bg-primary">Lorem ipsum dolor sit amet.</h1>
      <Button color={'primary'}>Click</Button>
      <ThemeSwitcher/>
    </main>
  );
}
