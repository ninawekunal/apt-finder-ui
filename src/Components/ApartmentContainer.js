import React from 'react';
import ApartmentList from './ApartmentList';
import Filter from './Filter';
import Loading from './Loading';

import {withApartmentConsumer} from '../context';

function ApartmentContainer({context}){
    const {loading, sortedApartments, apartments} = context;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <Filter apartments={apartments} />
        <ApartmentList apartments={sortedApartments} />
      </div>
    );
}

export default withApartmentConsumer(ApartmentContainer)
