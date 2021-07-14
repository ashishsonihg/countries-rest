function Filter(props) {
    return (
        <div class="filterTab">
          <form>
          <select id="selectTab" name="filter" value={props.filterQuery} onChange={e => props.setFilterQuery(e.target.value)}>
            <option value="" selected  disabled hidden>Filter by Region</option>
            <option value="" >All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          </form>
        </div>
      );
}

export default Filter;
