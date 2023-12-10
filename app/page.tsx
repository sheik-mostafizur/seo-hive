import {Button} from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container>
        <h1 className="bg-primary">Lorem ipsum dolor sit amet.</h1>
        <Button color={"primary"}>Click</Button>
      </Container>
    </main>
  );
}
