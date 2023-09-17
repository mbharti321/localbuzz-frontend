import Layout from "../templates/Layout";
import CallToAction from "./dashboard/CallToAction";
import ExploreCategories from "./dashboard/ExploreCategories";

export default function HomePage() {
  return (
    <Layout>
      <CallToAction></CallToAction>
      <ExploreCategories></ExploreCategories>
      {/* <BusinessSearch></BusinessSearch>
        <Filters></Filters>
        <WhyChooseUs></WhyChooseUs>
        <BusinessTypeCards></BusinessTypeCards>
        <Testimonials></Testimonials> */}
    </Layout>
  );
}
