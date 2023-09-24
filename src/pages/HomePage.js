import Layout from "../templates/Layout";
import CallToAction from "./dashboard/CallToAction/CallToAction";
import ExploreCategories from "./dashboard/ExploreCategories";
import FeaturedBusinesses from "./dashboard/FeaturedBusinesses";

export default function HomePage() {
  return (
    <Layout>
      <CallToAction></CallToAction>
      <ExploreCategories></ExploreCategories>
      <FeaturedBusinesses></FeaturedBusinesses>
      {/* <BusinessSearch></BusinessSearch>
        <Filters></Filters>
        <WhyChooseUs></WhyChooseUs>
        <Testimonials></Testimonials> */}
    </Layout>
  );
}
