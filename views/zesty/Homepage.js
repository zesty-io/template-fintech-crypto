// Components Imports
import TopImages from 'components/Homepage/TopImages';
import HeroBanner from 'components/Homepage/HeroBanner';
import HomeTiles from 'components/Homepage/HomeTiles';
import HowItWorks from 'components/Homepage/HowItWorks/HowItWorks';

import FeatureSection3 from 'components/Homepage/FeatureSection3';
import FeatureSection4 from 'components/Homepage/FeatureSection4';
import FeedbackSection from 'components/Homepage/FeedbackSection';
import BlogSection from 'components/Homepage/BlogSection';
import FancyShortBanner from 'components/Homepage/FancyShortBanner';
import BackToTopBtn from 'components/Homepage/BackToTopBtn';
// import { useEffect } from 'react';
import useFetch from 'components/hook/useFetch';

export default function Homepage({ content }) {
  const stagePassword = process.env.zesty.stage_password;
  let zestyURL = process.env.NEXT_PUBLIC_PRODUCTION
    ? process.env.zesty.production
    : process.env.zesty.stage;

    // console.log('zestyURL '+process.env.NEXT_PUBLIC_PRODUCTION)
  const { data: response } = useFetch(
    `/-/gql/homepage_tiles.json?zpw=${stagePassword}`,
    zestyURL,
  );

  const { data: signUpStepsdata } = useFetch(
    `/-/gql/sign_up_steps.json?zpw=${stagePassword}`,
    zestyURL,
  );
  

    //Banner
  const banner = {
     'title': content['title'] || '',
     'youtube_video_link' : content['youtube_video_link'] || '',
     'image': content['image'] || '',
     'cta_button_text': content['cta_button_text'] || '',
  }

    //Home Tiles 
  const homeTiles_content = response.data;


  //How it works
  const howItWorks = {
    'how_it_works_main_text': content['how_it_works_main_text'] || '',
    'how_it_works_description': content['how_it_works_description'] || '',
    'how_it_works_content': content['how_it_works_content'] || '',
    'sign_up_steps': content['sign_up_steps'] || '',
  }

  //SignUpSteps
  const SignUpStep = signUpStepsdata;
  


  


  return (
    <>
      <div className="main-page-wrapper dark-bg-one">
        <TopImages />
        <HeroBanner content={banner} />
        <HomeTiles content={homeTiles_content} />
        <HowItWorks content={howItWorks} signupcontent={SignUpStep}>
            
        </HowItWorks>
        {/* <FeatureSection3 content={content} /> */}
        {/* <FeedbackSection /> */}
        {/* <FeatureSection4 /> */}
        {/* <BlogSection /> */}
        {/* <FancyShortBanner /> */}
        {/* <BackToTopBtn /> */}
      </div>
    </>
  );
}
