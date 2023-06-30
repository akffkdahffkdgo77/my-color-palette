export default function Home() {
    return (
        <div className="p-10 [height:calc(100vh-81px)]">
            <section className="mx-auto flex h-full max-w-5xl items-center justify-center">
                <div className="relative h-[300px] w-[450px] animate-spin rounded-[50%] border-4 border-[#F5F5F5] bg-[#af7459]">
                    <div className="absolute bottom-[90px] left-[40px] h-[60px] w-[60px] rounded-full bg-[#121212]" />
                    <div className="absolute left-[100px] top-[40px] h-[80px] w-[80px] rounded-[50%] border-2 border-[#121212] bg-green-700 shadow-custom [transform:rotate(-25deg)] hover:animate-pulse" />
                    <div className="absolute left-[230px] top-[20px] h-[80px] w-[80px] rounded-[50%] border-2 border-[#121212] bg-blue-700 shadow-custom [transform:rotate(-25deg)] hover:animate-pulse" />
                    <div className="absolute right-[30px] top-[90px] h-[80px] w-[80px] rounded-[50%] border-2 border-[#121212] bg-red-700 shadow-custom [transform:rotate(-25deg)] hover:animate-pulse" />
                    <div className="absolute bottom-[30px] right-[100px] h-[80px] w-[80px] rounded-[50%] border-2 border-[#121212] bg-yellow-500 shadow-custom [transform:rotate(-25deg)] hover:animate-pulse" />
                    <div className="absolute bottom-[20px] left-[150px] h-[100px] w-[60px] rounded-[50%]  border-2 border-[#121212] bg-[#F5F5F5] shadow-custom [transform:rotate(-45deg)] hover:animate-pulse" />
                </div>
            </section>
        </div>
    );
}
