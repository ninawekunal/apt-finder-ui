import React, { Component } from 'react';

const ApartmentContext = React.createContext();

class ApartmentProvider extends Component {
  state ={
      apartments:[],
      sortedApartments:[],
      loading: true,
      fields: [],
      count: 0,
      offset: 0,
      total: 0,
      limit: 1,

      minPrice: 0,
      maxPrice: 0,
      minBeds: 0,
      maxBeds: 0,
      minBaths: 0,
      maxBaths: 0,
      baths: "All",
      beds: "All",
      price: 0
  }


  componentDidMount(){
    
    
    fetch('data.json')
    .then(res => res.json())
    .then((json) => {
      let maxPrice = Math.max(...json.data.map(d => d[1]));
      let maxBeds = Math.max(...json.data.map(d => d[0]));
      let maxBaths = Math.max(...json.data.map(d => d[2]));

      // console.log("maxPrice: " + maxPrice + " maxBeds: " + maxBeds + " maxBaths: " + maxBaths);

      this.setState({ 
        loading: false,
        fields: json.fields,
        count: json.count,
        apartments: json.data,
        sortedApartments: json.data,

        limit: json.limit,
        offset: json.offset,
        total: json.total,
        maxPrice: maxPrice,
        maxBeds: maxBeds,
        maxBaths: maxBaths,
        price: maxPrice
      })
      // console.log(json)
    })
    // .catch(console.log)

  }

  handleChange = event =>{
    const name = event.target.name;
    const value = event.target.value;
    // console.log(`this is type: ${type}, this is name: ${name}, this is value: ${value}`);

    this.setState({
        [name]: value
    }, this.filterApartments)

  }

  filterApartments = () => {
      let {
        apartments, 
        price,
        beds,
        baths,
        count
      } = this.state; 

      let tempApartments = [...apartments];
      let tempCount = count;

      //Transform values
      //get no of beds
      if (beds !== "All") {
        beds = parseInt(beds);
        tempApartments = tempApartments.filter(apartment => apartment[0] === beds);
      }
      if(baths !== "All"){
        baths = parseInt(baths);
        tempApartments = tempApartments.filter(apartment => apartment[2] === baths);
      }
      price = parseInt(price);
      // filter by price
      tempApartments = tempApartments.filter(apartment => apartment[1] <= price);

      var c = 0;
      tempApartments.forEach(apartment => {
        c++;
      });
      tempCount = c;
      this.setState({
        sortedApartments: tempApartments,
        count: tempCount
      });
  }

  render() {
    return (
      <ApartmentContext.Provider value={{...this.state, getApartment:this.getApartment, handleChange: this.handleChange}} >
        {this.props.children}
        {/* Provider Provides the data 
        Consumer accesses the data*/}
      </ApartmentContext.Provider>
    );
  }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export function withApartmentConsumer(Component){
    return function ConsumerWrapper(props){
      return (<ApartmentConsumer>
        {value => <Component {...props} context={value}/> }
      </ApartmentConsumer>);
    }
}


export {ApartmentProvider, ApartmentConsumer, ApartmentContext};