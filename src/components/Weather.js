import React from 'react';

const Weather = props => (
  <div>
    { props.city &&
      <div>
      <p>
      City/coutnry: {props.city}/{props.country}
      </p>
      <p>Weather {props.temp}</p>
      <p>Sunrise {props.sunrise}</p>
      <p>Sunset {props.sunset}</p>
      </div>
    }
    <p>{props.error}</p>
    </div>
)

export default Weather;
