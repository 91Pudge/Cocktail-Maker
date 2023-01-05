import { ChangeEvent } from "react";

export type Props = {
    onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    cocktailData: any;
    setCocktailData: any;
    userInput: any;
    isLoading: boolean;
    randomCocktail: (e: React.FormEvent<HTMLFormElement>) => void;
    // data: any;
};