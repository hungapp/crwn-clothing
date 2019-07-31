import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  SubtitleContainer,
  TiltleContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
    <ContentContainer>
      <TiltleContainer>{title.toUpperCase()}</TiltleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
