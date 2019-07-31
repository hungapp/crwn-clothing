import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  ImageContainer,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer,
  CollectionItemButton,
  CollectionItemContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <CollectionItemButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
