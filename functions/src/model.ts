

export interface Ingredient {
    name: string;
    nutritionalGrade?: string;
    allergens?: string[];
    description?: {};
}

export interface Recipe {
    id: number;
    name: string;
    summary?: string;
    diet?: string[];
    image?: string;
    ingredients?: string[];

}
