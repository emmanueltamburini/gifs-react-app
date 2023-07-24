import { getGif } from '../../src/helpers/getGif';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://api.giphy.com/v1/gifs/search',
    (_, res, ctx) => {
      return res(
        ctx.json({
          data: [
            {
              id: 'gif1',
              title: 'Funny Gif 1',
              images: {
                downsized_medium: { url: 'http://example.com/gif1.gif' },
              },
            },
          ],
        })
      );
    }
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('test of getGif()', () => {
    test('should return and GIFs array', async () => {
        const gif = await getGif('test');
        expect(gif.length).toBeGreaterThan(0);
        expect(gif[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})