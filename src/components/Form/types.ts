export type FormPropsType = {
    setName: React.Dispatch<React.SetStateAction<string>>;
    onSave: (e: React.FormEvent<HTMLFormElement>) => void;
    onReset: () => void;
    onSelect: () => void;
};
