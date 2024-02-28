import { useEffect, useState } from 'react'
function RotateText({itemList, letterNum} : {itemList: {text: string, color:string}[], letterNum:number}) {
    const [displayIdx, setdisplayIdx] = useState(0);
    const [letterIdx, setLetterIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setdisplayIdx(prevIdx => {
                const nextIdx = (prevIdx + 1) % itemList.length;
                return nextIdx;
            });
            setLetterIdx(0);
        }, 3000);
        return () => {
            clearInterval(id);
        };
      }, []);
    useEffect(() => {
        const nextLetterIdx = (letterIdx + 1) % (letterNum + 3);
        if(nextLetterIdx !== 0){
            const timer = setTimeout(() => {
                setLetterIdx(nextLetterIdx);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [letterIdx, letterNum])
  return (

        <span className="rotating-text">
            <p>
                {
                    itemList.map((item:{text: string, color:string}, textId:number) => {
                        return (
                            <span className={`word`} key={textId} style={{color:item.color}}>
                                {item.text.split('').map((char:string, charId:number) => {
                                    return <span 
                                            className={
                                                // If the current item is the one being displayed
                                            displayIdx === textId ? (
                                                // If the current letter is behind or in front of the rotating letter
                                                letterIdx <= charId + 1? "letter behind" : "letter in"
                                            ) : (
                                                // If the next item to be displayed is the one containing this letter
                                                displayIdx === (textId + 1) % itemList.length ? (
                                                    // If the current letter is behind or in front of the rotating letter
                                                    letterIdx <= charId ? "letter in" : "letter out"
                                                ) : (
                                                    // Otherwise, this letter is not involved in the rotation
                                                    "letter out"
                                                )
                                            )
                                            }
                                            key={charId}>
                                                {char}
                                            </span>;
                                })}
                            </span>
                        );
                    })
                }
            </p>
        </span>
  );
}

export default RotateText