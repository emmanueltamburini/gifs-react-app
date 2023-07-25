import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from '../../../src/Components/AddCategory/index';
describe('Test in AddCategory', () => {
    test('should show the value of the textbox', () => {
        render(<AddCategory onAdd={jest.fn()} />);
        const input = screen.getByRole<HTMLInputElement>('textbox');

        fireEvent.input(input, {target: {value: 'test'}});

        expect(input.value).toBe('test');
    });

    test('should call onAdd function when the input has a value', () => {
        const inputValue = 'Test';
        const onAdd = jest.fn();

        render(<AddCategory onAdd={onAdd} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onAdd).toHaveBeenCalled();
        expect(onAdd).toHaveBeenCalledTimes(1);
        expect(onAdd).toHaveBeenCalledWith(inputValue);
    });

    test('should call onAdd function when the input has no value', () => {
        const onAdd = jest.fn();

        render(<AddCategory onAdd={onAdd} />);

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onAdd).toHaveBeenCalled();
        expect(onAdd).toHaveBeenCalledWith('');
    });
})