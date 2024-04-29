import React, { Component } from 'react';

class MedlocateData extends Component {
 constructor(props) {
    super(props);
    this.state = {
      pharmaciesCount: 10, // Initialize to 0 to indicate loading or error state
      patientsCount: 12,
      ordersCount: 14,
      citiesCount: 5,
    };
 }

 componentDidMount() {
    // Fetch users data
    fetch('/api/v1/auth/uses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched users data:', data); // Debugging line
        if (!Array.isArray(data)) {
          throw new Error('Expected an array of users');
        }
        const pharmaciesCount = data.filter(user => user.role === 1).length;
        const patientsCount = data.filter(user => user.role === 0).length;
        const cities = data.map(user => user.city); // Extract cities from user data
        const uniqueCities = [...new Set(cities)]; // Get unique cities
        const citiesCount = uniqueCities.length; // Count unique cities
        console.log('Updating state with:', { pharmaciesCount, patientsCount, citiesCount }); // Debugging line
        this.setState({ pharmaciesCount, patientsCount, citiesCount });
      })
      .catch(error => {
        console.error('Error fetching users data:', error);
        // Optionally, set an error state to display an error message in the UI
      });

    // Fetch orders data
    fetch('/api/v1/orders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched orders data:', data); // Debugging line
        if (!Array.isArray(data)) {
          throw new Error('Expected an array of orders');
        }
        const ordersCount = data.length; // Assuming the API returns an array of orders
        console.log('Updating state with orders count:', ordersCount); // Debugging line
        this.setState({ ordersCount }); // Update the state with the orders count
      })
      .catch(error => {
        console.error('Error fetching orders data:', error);
        // Optionally, set an error state to display an error message in the UI
      });
 }

 render() {
    const { pharmaciesCount, patientsCount, ordersCount, citiesCount } = this.state;

    return (
      <section className="section-p40 main-area food-top1">
        <div className="row mb_90">
          <div className="col-lg-10 offset-lg-1">
            <div className="prof-web-success-points" style={{ background: '#3AAFA9', color: '#FFFFFF' }}>
              <div className="d-flex">
                <div className="flex-grow-1 text-center border-right">
                 <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                    {pharmaciesCount}
                 </h2>
                 <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>
                    Number of Pharmacies
                 </p>
                </div>
                <div className="flex-grow-1 text-center border-right">
                 <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                    {patientsCount}
                 </h2>
                 <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>Patient</p>
                </div>
                <div className="flex-grow-1 text-center border-right">
                 <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                    {ordersCount}
                 </h2>
                 <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>Order</p>
                </div>
                <div className="flex-grow-1 text-center">
                 <h2 className="success-points-number roboto-font counter" style={{ color: '#FFFFFF' }}>
                    {citiesCount}
                 </h2>
                 <p className="success-point-title roboto-font" style={{ color: '#FFFFFF' }}>
                    Number of City
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
 }
}

export default MedlocateData;
