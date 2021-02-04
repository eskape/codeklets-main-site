import Layout from "../components/layout";
import Container from "../components/container";

function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <div class="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
          <p class="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
            Over ons.
          </p>
          <p class="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6  text-gray-500">
            Laten we het eens over ons hebben, want het is misschien wel handig
            om te weten wie er achter al dat geklets over{" "}
            <code class="font-mono text-gray-900 font-bold">code</code> zit, en
            waarom wij dit doen.
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export default About;
