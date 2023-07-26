import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGif } from '../../src/hooks/useFetchGif';
import { getGif } from '../../src/helpers/getGif';
import { Gif } from '../../src/interfaces/Gif.interfaces';

jest.mock("../../src/helpers/getGif");

const gifArray: Gif[] = [
    {
        id: '1',
        title: 'test-1',
        url: 'https://www.test.com/1'
    },
                {
        id: '2',
        title: 'test-2',
        url: 'https://www.test.com/2'
    }
];

(getGif as jest.Mock).mockResolvedValue(gifArray);

describe('test in useFetchGif', () => {
    test('should return initial state', () => {
        const {result} = renderHook(() => useFetchGif('test'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return images array and isLoading is true', async () => {
        const {result} = renderHook(() => useFetchGif('test'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            { timeout: 400000 }
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});