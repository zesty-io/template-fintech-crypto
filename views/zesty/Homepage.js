// Components Imports
import TopImages from 'components/Homepage/TopImages';
import HeroBanner from 'components/Homepage/HeroBanner';
import FeatureSection from 'components/Homepage/FeatureSection';
import FeatureSection2 from 'components/Homepage/FeatureSection2';
import FeatureSection3 from 'components/Homepage/FeatureSection3';
import FeatureSection4 from 'components/Homepage/FeatureSection4';
import FeedbackSection from 'components/Homepage/FeedbackSection';
import BlogSection from 'components/Homepage/BlogSection';
import FancyShortBanner from 'components/Homepage/FancyShortBanner';
import BackToTopBtn from 'components/Homepage/BackToTopBtn';

export default function Homepage({ content }) {
  return (
    <>
      <div className="main-page-wrapper dark-bg-one">
        <TopImages />
        <HeroBanner content={content}/>
        <FeatureSection content={content}/>
        <FeatureSection2 content = {content} />
        <FeatureSection3 />
        <FeedbackSection />
        <FeatureSection4 />
        <BlogSection />
        <FancyShortBanner />
        <BackToTopBtn />
      </div>
    </>
  );
}
