export const NutrientTypes = ["Water", "Carbohydrates", "Protein", "Fat", "Vitamins", "Minerals", "fibre"];
export const Books: Book[] = [
    { name: 'Stillness is the Key', author: 'Ryan Holiday' },
    
    { name: 'When Breath Becomes Air', author: 'Paul Kalanithi' },
    { name: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari' },
    { name: 'Into Thin Air: A Personal Account of the Mt. Everest Disaster', author: 'Jon Krakauer' },
    { name: 'Surely You\'re Joking, Mr. Feynman!', author: 'Richard P. Feynman' },
    { name: 'Guns, Germs, and Steel: The Fates of Human Societies', author: 'Jared Diamond' },
    { name: 'Manual for Living', author: 'Epictetus' },
    { name: 'Influence: The Psychology of Persuasion', author: 'Robert Cialdini' },
    { name: 'Meditations', author: 'Marcus Aurelius' },
    { name: 'A Brief History of Time', author: 'A Brief History of Time' },
    { name: 'The War of Art: Break Through Your Blocks and Win Your Inner Creative Battles', author: 'Steven Pressfield' },
    { name: 'This is Water', author: 'David Foster Wallace' },

];


export interface Book {
    name: string;
    author: string;
    publisher?: string;
    ISBN?: string;
    category?: string;
}

export enum BookCategory {
    nonFiction = "NON_FICTION",
    fiction = "FICTION",
    artAndCreativity = "ART_AND_CREATIVITY",
    biographiesAndMemoires = "BIOGRAPHIES_AND_MEMOIRS",
    business = "BUSINESS",
    fitness = "FITNESS",
    history = "HISTORY",
    // TODO complete list from https://jamesclear.com/best-books/nonfiction
}