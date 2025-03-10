import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { arrayOf, shape, string, func } from 'prop-types';
import { ServiceContext } from '#contexts/ServiceContext';
import useOperaMiniDetection from '#hooks/useOperaMiniDetection';
import Promo from '../Promo';

const StandardScrollPromo = styled.ul`
  list-style: none;
  ${({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}: 0;`}
  margin: 0;
  display: flex;
  overflow-x: scroll;
  /* Avoid using smooth scrolling as it causes accessibility issues */
  scroll-behavior: auto;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OperaScrollPromo = styled.ul`
  list-style: none;
  ${({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}: 0;`}
  margin: 0;
`;

const StyledList = styled.li`
  display: flex;
  flex-shrink: 0;

  ${({ dir }) =>
    `
      @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}){
        margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING};
        &:first-child {
          margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING};
        }
        &:last-child {
          margin-${dir === 'ltr' ? 'right' : 'left'}: ${GEL_SPACING};
        }
      }
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}){
        margin-${dir === 'ltr' ? `left` : `right`}: ${GEL_SPACING_DBL};  

        &:first-child {
          margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING_DBL};
        }
      }
      @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}){
          margin-${dir === 'ltr' ? `left` : `right`}: ${GEL_SPACING_DBL};
          &:first-child {
            margin-${dir === 'ltr' ? 'left' : 'right'}: 0;
          }
      }
  `}
`;

const OperaStyledList = styled.li`
  ${({ dir }) => `@media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}){
      margin-${dir === 'ltr' ? 'left' : 'right'}: ${GEL_SPACING};
    }
    @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}){
      margin-${dir === 'ltr' ? `left` : `right`}: ${GEL_SPACING_DBL};   
    }
    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}){
      margin-${dir === 'ltr' ? `left` : `right`}: 0;}`}
`;

const PromoList = ({ blocks, viewTracker, onClick }) => {
  const { dir } = useContext(ServiceContext);
  const isOperaMini = useOperaMiniDetection();
  const listBlocks = blocks.slice(0, 3);

  const ScrollPromo = isOperaMini ? OperaScrollPromo : StandardScrollPromo;
  const List = isOperaMini ? OperaStyledList : StyledList;

  return (
    <ScrollPromo
      dir={dir}
      role="list"
      isOperaMini={isOperaMini}
      ref={viewTracker}
    >
      {listBlocks.map((block, index) => {
        return (
          <List
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            dir={dir}
          >
            <Promo block={block} onClick={onClick} />
          </List>
        );
      })}
    </ScrollPromo>
  );
};

PromoList.propTypes = {
  blocks: arrayOf(
    shape({
      headlines: shape({ headline: string.isRequired }),
      locators: shape({ assetUri: string.isRequired }),
    }),
  ).isRequired,
  viewTracker: func.isRequired,
  onClick: func.isRequired,
};

export default PromoList;
