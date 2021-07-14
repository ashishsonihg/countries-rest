function Search(props) {
    return (
        <div className="search">
          <img class="icon" src="https://img.icons8.com/ios/50/ffffff/search--v1.png"/>
          <input
              value = {props.searchQuery}
              onInput={e => props.setSearchQuery(e.target.value)}
              type='text'
              placeholder='Search For Countries...'
              name="search"
          />
        </div>
    );
}

export default Search;
