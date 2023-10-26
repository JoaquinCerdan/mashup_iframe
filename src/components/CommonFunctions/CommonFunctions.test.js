import '@testing-library/jest-dom';
import { getDateFormatted } from './CommonFunctions';

describe('CommonFunctions', () => {
  it('should return date formatted', async () => {
    expect(getDateFormatted('15/02/2023 15:33')).toEqual(44973);
  });
});
