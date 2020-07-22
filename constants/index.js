export const GET_NOTES = 'GET_NOTES';

export const BLANK_NOTE = {
  id: '1',
  title: 'BOOM',
  body: 'This is totally some stuff',
  timestamp: Date.now(),
};

export const INITIAL_STATE = {
  selectedNoteIndex: 0,
  selectedNote: null,
  notes: [BLANK_NOTE],
};
