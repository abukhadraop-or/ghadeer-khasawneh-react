import get from 'utils/https';

describe('https', () => {
  test('sends an HTTP request and returns correct data', async () => {
    const res = 'title';
    const movies = { data: res };
    const mocker = jest.fn(() => movies);
    global.fetch = jest.fn().mockResolvedValue({ json: mocker });
    const response = await get('url');

    expect(mocker).toHaveBeenCalled();
    expect(response).toEqual(movies);
  });
});
