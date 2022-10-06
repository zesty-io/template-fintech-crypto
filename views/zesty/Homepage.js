// Components Imports
import FeatureSection from 'components/Homepage/FeatureSection';
import HeroBanner from 'components/Homepage/HeroBanner';
import TopImages from 'components/Homepage/TopImages';

export default function Homepage({ content }) {
  return (
    <>
      <div class="main-page-wrapper dark-bg-one">
        <TopImages />
        <HeroBanner />
        <FeatureSection />
      </div>
    </>
  );
}
