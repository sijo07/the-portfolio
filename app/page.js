import {
  Aboutme,
  Contact,
  Header,
  HomePage,
  Projects,
  Skills,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Skills />
      <Projects />
      <Aboutme />
      <Contact />
    </>
  );
}
