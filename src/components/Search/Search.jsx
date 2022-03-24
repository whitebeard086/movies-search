import { Input, InputContainer, SearchContainer, SearchItems, Text } from "./styles";

const Search = ({ search, setSearch }) => {
  return (
    <SearchContainer>
      <SearchItems>
        <Text>Search</Text>
        <InputContainer>
          <Input
            type="text"
            placeholder="Search for movies"
            value={search.value}
            onChange={e => setSearch(e.target.value)}
          />
        </InputContainer>
      </SearchItems>
    </SearchContainer>
  );
};
export default Search;
