import Layout from "../templates/Layout";
import CallToAction from "./dashboard/CallToAction";
export default function HomePage() {
  return (
    <Layout>
        <CallToAction></CallToAction>
        {/* <BusinessSearch></BusinessSearch>
        <Filters></Filters>
        <WhyChooseUs></WhyChooseUs>
        <BusinessTypeCards></BusinessTypeCards>
        <Testimonials></Testimonials> */}
    </Layout>
  );
}
