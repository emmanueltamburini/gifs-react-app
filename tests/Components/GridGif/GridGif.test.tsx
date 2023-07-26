import React from "react";
import { render, screen } from "@testing-library/react";
import { GridGif } from '../../../src/Components/GridGif/index';
import { useFetchGif } from "../../../src/hooks/useFetchGif";
import { Gif } from "../../../src/interfaces/Gif.interfaces";

jest.mock("../../../src/hooks/useFetchGif");

describe('Tests in GridGif', () => {
    const category = 'test';
    test('should be equal to snapshot', () => {
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

        (useFetchGif as jest.Mock).mockReturnValue({
            images: gifArray,
            isLoading: false,
        });

        const {container} = render(<GridGif category={category}></GridGif>);
        expect(container).toMatchSnapshot();
    });
    test('should show loading when init', () => {
        (useFetchGif as jest.Mock).mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GridGif category={category}></GridGif>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });


    test('should show items when these are loaded from useFetchGif', () => {
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

        (useFetchGif as jest.Mock).mockReturnValue({
            images: gifArray,
            isLoading: false,
        });

        render(<GridGif category={category}></GridGif>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});