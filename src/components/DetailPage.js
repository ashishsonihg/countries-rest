import './DetailPage.css'
import CountriesDataObject from './allCountriesData.js'
import {Link, useHistory} from 'react-router-dom'
const allCountriesObject = CountriesDataObject[0];
const mapCountryCode = CountriesDataObject[1];
function DetailPage(props){
    let history = useHistory();
    var NoBorderCountriesReply = '';
    let countryName = props.countryName;
    const countryDetail = allCountriesObject.filter(country => { return country.name.toLowerCase() === countryName.toLowerCase()})
    // console.log(countryDetail);
    const countryData = countryDetail[0];

    let borderCountries = [], countryCurrencies = [], countryLanguages = [];
    if(countryData){
        countryData.borders.forEach( country =>{
            let CName = mapCountryCode[country];
            borderCountries.push(
                <button class="border-button">
                    <Link to = {`/countryDetail/${CName}`}>
                        {CName.split('(')[0]}
                    </Link>
                    </button>
            )
        });

        if(countryData.borders.length === 0){
            NoBorderCountriesReply = 'No Bordering Countries';
            // borderCountries.push(<span className='countryInfoData'>No Bordering Countries</span>)
        }


    }


    return(
      <div>
      <Link to="/">
        <button id="back" type="button" name="button">&#8592;   Back</button>
      </Link>
      <main class="main">
        <img class="info-flag" src={countryData.flag} alt=""/>
        <article class="info-data">

          <h1 id="country">{countryData.name}</h1>
          <ul>
            <li><b>Native Name: </b>{countryData.nativeName}</li>
            <li><b>Population: </b>{countryData.population}</li>
            <li><b>Region: </b>{countryData.region}</li>
            <li><b>Sub Region: </b>{countryData.subregion}</li>
            <li><b>Capital: </b>{countryData.capital}</li>
            <li><b>Top level Domain:</b>{countryData.topLevelDomain}</li>
            <li><b>Currencies: </b>{countryData.currencies[0].name}</li>
            <li><b>Languages: </b>{countryData.languages[0].name}</li>
            <li></li>
          </ul>
          <b>Borders:</b>{borderCountries}
        </article>
      </main>
      </div>
    );
};

export default DetailPage;
