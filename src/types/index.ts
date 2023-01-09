import { ChangeEvent } from "react";

export type Props = {
    onSubmitForm?: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    cocktailData: any[];
    setCocktailData?: React.Dispatch<React.SetStateAction<any[]>>;
    userInput?: React.Dispatch<React.SetStateAction<string>>;
    randomCocktail?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    id: number;
    data?: any[];

};

export type Drinks = {
    strDrink: string;
    id: number;
    data: any;
    idDrink: string;
    strInstructions: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strDrinkThumb: string;
    strGlass: string;
};



export type IRecipe = {
    cocktailData: any;
    id: number;
    data: any;
}

export type HomeProps = {
    onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cocktailData: any[];
    setCocktailData: React.Dispatch<React.SetStateAction<any[]>>;
    userInput: React.Dispatch<React.SetStateAction<string>>;
    randomCocktail: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    id: number;
    data: any[];
};