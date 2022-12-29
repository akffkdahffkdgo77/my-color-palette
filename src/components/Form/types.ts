export interface IForm {
    setName: React.Dispatch<React.SetStateAction<string>>;
    handleSave: (e: React.FormEvent<HTMLFormElement>) => void;
    handleReset: () => void;
    handleSelect: () => void;
}
