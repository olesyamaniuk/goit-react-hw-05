export default function SearchBox({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.elements.search.value;
    if (searchText.trim() === '') {
      console.log('Please enter a search query');
      return;
    }
    onSubmit(searchText);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
        />
        <button type="submit">
          {' '}
          Search
        </button>
      </form>
    </div>
  );
}