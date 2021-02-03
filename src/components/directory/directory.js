import React from 'react';
import  MenuIteam from '../menu-item/menu-item';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import  {selectDirectorySections} from '../../redux/directory/directory-selectors';
import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => (
        <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps}) => (
            <MenuIteam key={id} {...otherSectionProps}  />
          ))}
        </DirectoryMenuContainer>
       )

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);