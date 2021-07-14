

function Country(props){
    // const countryName = 'India';
    // const countryPopulation = 1220000000;
    // const countryCapital = 'New Delhi';

    return (
        <div class="data-card">
          <img src={props.flagUrl} />
          <div class="data-text">
            <h1 class="cname">{props.name}</h1>
            <ul>
              <li id="population"><b>Population:</b> {props.population}</li>
              <li id="region"><b>Region</b>: {props.region}</li>
              <li id="capital"><b>Capital</b>: {props.capital}</li>
            </ul>
          </div>
        </div>
      );
}

export default Country;
