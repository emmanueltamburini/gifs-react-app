import React from "react";
import { render } from "@testing-library/react"
import { Gif } from "../../../src/interfaces/Gif.interfaces";
import { GridItem } from '../../../src/Components/GridGif/GridItem/GridItem';

describe('GridItem test', () => {
    const image: Gif = {
            id: "TS9pTA670S1ajXEiK1",
            title: "Ace Of Spades Poker GIF",
            url: "https://media2.giphy.com/media/TS9pTA670S1ajXEiK1/giphy.gif?cid=47a56d216o55wkkv9735xyvrthi3vd3g5rtrzamij06uueeu&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        };
    test('should be equal to snapshot', () => {
        const {container} = render(<GridItem image={image} />);
        expect(container).toMatchSnapshot();
    });
})