import React, { useContext } from 'react';
import { bool, string } from 'prop-types';
import styled from '@emotion/styled';
import SectionLabel from '@bbc/psammead-section-label';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { C_GREY_2 } from '@bbc/psammead-styles/colours';
import { ServiceContext } from '#contexts/ServiceContext';

const SectionLabelWithMargin = styled(SectionLabel)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    margin-bottom: ${GEL_SPACING_DBL};
  }
`;

const MostReadSectionLabel = ({ mobileDivider, backgroundColor }) => {
  const {
    service,
    script,
    dir,
    mostRead: { header },
  } = useContext(ServiceContext);
  return (
    <SectionLabelWithMargin
      script={script}
      labelId="Most-Read"
      service={service}
      dir={dir}
      mobileDivider={mobileDivider}
      backgroundColor={backgroundColor}
    >
      {header}
    </SectionLabelWithMargin>
  );
};

MostReadSectionLabel.propTypes = {
  mobileDivider: bool,
  backgroundColor: string,
};

MostReadSectionLabel.defaultProps = {
  mobileDivider: true,
  backgroundColor: C_GREY_2,
};

export default MostReadSectionLabel;
