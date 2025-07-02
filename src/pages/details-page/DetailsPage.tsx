import { Fragment, type FC } from "react";
import DetailsHero from "../../components/details-components/DetailsHero";
import * as DetailsData from '../../fake-data/details-data/DetailsData';

const DetailsPage: FC = () => {
  return (
    <Fragment>
      <DetailsHero data={DetailsData.detailsHeroData} />
    </Fragment>
  );
};

export default DetailsPage;
