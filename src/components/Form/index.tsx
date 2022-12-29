import { IForm } from 'components/Form/types';

export default function Form({ setName, handleSave, handleReset, handleSelect }: IForm) {
    return (
        <form onSubmit={handleSave}>
            <label htmlFor="name" className="flex flex-col text-[10px]">
                <p className="hidden">NAME</p>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    maxLength={20}
                    placeholder="Enter the name of Palette"
                    className="text-[16px] p-2.5 rounded-md border border-[#11052C] focus:outline-dashed focus:outline-1 focus:outline-[#11052C]"
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <button className="mt-10 border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleReset}>
                Reset
            </button>
            <button className="mx-2.5 border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="button" onClick={handleSelect}>
                Select
            </button>
            <button className="border rounded-md border-[#11052C] px-[5px] font-mono font-bold uppercase text-[18px]" type="submit">
                Save
            </button>
        </form>
    );
}
