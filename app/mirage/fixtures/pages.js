export default [{
  id: 'first-page',
  title: 'First Page!',
  caption: 'first page',
  next_id: 'second-page',
  file_id: 1
}, {
  id: 'second-page',
  title: 'Second Page!',
  caption: 'second page',
  next_id: 'third-page',
  previous_id: 'first-page',
  file_id: 2
}, {
  id: 'third-page',
  title: 'Third Page!',
  caption: 'third page',
  previous_id: 'second-page',
  file_id: 3
}];
