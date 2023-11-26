import Layout from "../../templates/Layout";
import CallToAction from "./CallToAction/CallToAction";
import ExploreCategories from "./ExploreCategories/ExploreCategories";
import FeaturedBusinesses from "./FeaturedBusinesses/FeaturedBusinesses";
import Testimonials from "./Testimonials/Testimonials";
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
