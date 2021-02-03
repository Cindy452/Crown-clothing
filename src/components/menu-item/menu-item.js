import React from 'react';
import { withRouter} from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuIteam = ({title, imageUrl, size, history, match, linkUrl }) => (
    <MenuItemContainer
    size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <BackgroundImageContainer className='background-image' imageUrl={imageUrl}  />
    <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)

export default withRouter(MenuIteam);