import { ChangeEvent } from "react";

export type Props = {
    onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cocktailData: [];
    setCocktailData: React.Dispatch<React.SetStateAction<[]>>;
    userInput: React.Dispatch<React.SetStateAction<string>>;
    randomCocktail: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    id: number;

};

export type Drinks = {
    strDrink: string;
    cocktailData: any;
    id: number;
    data: any;
} & Props;