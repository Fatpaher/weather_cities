import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '87462facbbc0ac73d4b94ad564a64936'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
    };
  }

  formattedTime(time) {
      var date = new Date();
      date.setTime(time);
      var formatted_time = date.getHours(date) + ':' + date.getMinutes(date) + ':' + date.getSeconds(date);
      return(formatted_time)
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: this.formattedTime(data.sys.sunrise),
        sunset: this.formattedTime(data.sys.sunset),
        error: undefined,
      });
    } else {
      this.setState({
        error: 'Enter city name'
      });
    }
  }

  render () {
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
