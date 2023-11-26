import Layout from "../templates/Layout";
import CallToAction from "./dashboard/CallToAction/CallToAction";
import ExploreCategories from "./dashboard/ExploreCategories";
import FeaturedBusinesses from "./dashboard/FeaturedBusinesses";
import Testimonials from "./dashboard/Testimonials/Testimonials";
export default function HomePage() {
  return (
    <Layout>
      <CallToAction></CallToAction>
      <ExploreCategories></ExploreCategories>
      <FeaturedBusinesses></FeaturedBusinesses>
      <Testimonials></Testimonials> 
      {/* <BusinessSearch></BusinessSearch>
        <Filters></Filters>
        <WhyChooseUs></WhyChooseUs>
        */}
    </Layout>
  );
}
