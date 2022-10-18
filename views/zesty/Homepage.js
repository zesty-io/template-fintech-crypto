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
import { useEffect } from 'react';
import useFetch from 'components/hook/useFetch';

export default function Homepage({ content }) {
  const stagePassword = process.env.zesty.stage_password;
  let zestyURL = process.env.NEXT_PUBLIC_PRODUCTION
    ? process.env.zesty.production
    : process.env.zesty.stage;

  const { data: response } = useFetch(
    `/-/instant/7-9ee5b092c9-gf268g.json?zpw=${stagePassword}`,
    zestyURL,
  );
  console.log(response);

  return (
    <>
      <div className="main-page-wrapper dark-bg-one">
        {/* <TopImages />
        <HeroBanner content={content} />
        <FeatureSection content={content} />
        <FeatureSection2 content={content} />
        <FeatureSection3 content={content} />
        <FeedbackSection />
        <FeatureSection4 />
        <BlogSection />
        <FancyShortBanner />
        <BackToTopBtn /> */}
      </div>
    </>
  );
}
