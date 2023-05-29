export default function MiniColorPalette() {
    return (
        <div className="p-10 [height:calc(100vh-81px)]">
            <section className="h-full flex items-center justify-center max-w-5xl mx-auto">
                <div className="relative spin border-4 border-[#F5F5F5] w-[450px] h-[300px] rounded-[50%] bg-[#af7459]">
                    <div className="absolute bottom-[90px] rounded-full left-[40px] w-[60px] h-[60px] bg-[#121212]" />
                    <div className="absolute hover:animate-pulse box-shadow border-2 border-[#121212] [transform:rotate(-25deg)] top-[40px] left-[100px] bg-green-700 w-[80px] h-[80px] rounded-[50%]" />
                    <div className="absolute hover:animate-pulse box-shadow border-2 border-[#121212] [transform:rotate(-25deg)] top-[20px] left-[230px] bg-blue-700 w-[80px] h-[80px] rounded-[50%]" />
                    <div className="absolute hover:animate-pulse box-shadow border-2 border-[#121212] [transform:rotate(-25deg)] top-[90px] right-[30px] bg-red-700 w-[80px] h-[80px] rounded-[50%]" />
                    <div className="absolute hover:animate-pulse box-shadow border-2 border-[#121212] [transform:rotate(-25deg)] bottom-[30px] right-[100px] bg-yellow-500 w-[80px] h-[80px] rounded-[50%]" />
                    <div className="absolute hover:animate-pulse box-shadow border-2 border-[#121212] [transform:rotate(-45deg)]  bottom-[20px] left-[150px] bg-[#F5F5F5] w-[60px] h-[100px] rounded-[50%]" />
                </div>
            </section>
        </div>
    );
}
