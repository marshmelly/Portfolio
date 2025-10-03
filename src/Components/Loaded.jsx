import { useEffect, useState } from "react"

export const Loaded = ({ onComplete }) => {

    const [text, setText] = useState("");
    const fullText = "Hi There!"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                  onComplete();
                }, 1000)

            }
        }, 200);

        
        return ()=> clearInterval();
    },[onComplete]);

    return(
        <div className="fixed inset-0 z-50 bg-black text-gray flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono fony-bold">
                {text}
                <span className="animate-blink ml-1"></span>
            </div>
             
             <div className="w-[200px] h-[2px] bg-grey rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px-#3b82f6] animate-loading-bar"></div>
             </div>
        </div>
    )
}