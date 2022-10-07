import React from 'react';
import PropTypes from 'prop-types';
import BannerSearch from './components/BannerSearch';
import SearchInput from 'components/SearchInput';
import SpecialistList from './components/SpecialistList';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <div className="homePage">
            <BannerSearch />
            <SpecialistList />
        </div>
    );
}

export default HomePage;