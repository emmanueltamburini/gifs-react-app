import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GifApp from '../src/GifApp';

describe('Test in GifApp', () => {
    test('should be equal to snapshot', () => {
        const {container} = render(<GifApp />);
        expect(container).toMatchSnapshot();
    });

    test('should add a new category', () => {
        const category = 'category1';
        render(<GifApp />);
        fireEvent.change(screen.getByPlaceholderText('Search gif'), { target: { value: category } });
        fireEvent.submit(screen.getByLabelText('form'));
        expect(screen.getByText(category));
    });

    test('should not add new category with empty search', () => {
        const category = '     ';
        render(<GifApp />);
        fireEvent.change(screen.getByPlaceholderText('Search gif'), { target: { value: category } });
        fireEvent.submit(screen.getByLabelText('form'));
        expect(screen.queryByText(category)).toBeNull();
        expect(screen.queryByText('Loading...')).toBeNull();
        expect(screen.queryAllByRole('img').length).toBe(0);
    });

    test('should not add new category if it is repeated', () => {
        const category = 'category2';
        const repeatCategory = 3;
        render(<GifApp />);
        for (let i = 0; i < repeatCategory; i++) {
            fireEvent.change(screen.getByPlaceholderText('Search gif'), { target: { value: category } });
            fireEvent.submit(screen.getByLabelText('form'));
        }
        expect(screen.getAllByText(category).length).toBe(1);
    });
})