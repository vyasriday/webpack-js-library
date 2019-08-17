/* eslint-disable no-undef */
import capitalize from '../src/capitalize';
import unique from './../src/unique';
import longestDistinctSubstring from '../src/distinctString';

describe('Testing Library', () => {
  it('Tests Capitalize Function', () => {
    expect(capitalize('hridayesh')).toBe('Hridayesh');
  });

  it('Tests Unique Function', () => {
    expect(unique([11, 1, 2, 11, 22, 11, 'h', 'h'])).toEqual([
      11,
      1,
      2,
      22,
      'h',
    ]);
  });

  it('Tests Capitalize Function', () => {
    expect(longestDistinctSubstring('abbbccddeeabcdefghijk')).toBe(
      'abcdefghijk'
    );
  });
});
