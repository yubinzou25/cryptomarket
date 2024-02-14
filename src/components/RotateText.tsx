import { useEffect, useState } from 'react'
// 0   =>   1    => 2  => 0
// out => behind => in => out
// 2s => 0.1 => 0.9s  => 2s
//   full   gradual  gradual
function RotateText({itemList} : {itemList: {text: string, color:string}[]}) {
    const stateList = ["letter out", "letter behind", "letter in"];
    const [displayIdx, setdisplayIdx] = useState(0);
    const [letterIdx, setLetterIdx] = useState(0);
    const [behindIdx, setBehindIdx] = useState(-1);
    useEffect(() => {
        const id = setInterval(() => {
            setdisplayIdx(prevIdx => {
                const nextIdx = (prevIdx + 1) % itemList.length;
                setBehindIdx(nextIdx);
                return nextIdx;
            });
            setLetterIdx(0);
            setTimeout(() => setBehindIdx(-1), 300);
        }, 2000);
        return () => {
            clearInterval(id);
        };
      }, []);
    useEffect(() => {
        if(letterIdx === 0){
            setTimeout(() => {
                setLetterIdx(1)
            }, 200)
        }else if(letterIdx === 1){
            setTimeout(() => {
                setLetterIdx(2)
            }, 200)
        }else if(letterIdx === 2){
            setTimeout(() => {
                setLetterIdx(3)
            }, 200)
        }
    }, [letterIdx])
  return (
    <>
        <span className="rotating-text">
            <p>
                {
                    itemList.map((item:{text: string, color:string}, textId:number) => {
                        return (
                            <span className={`word`} key={textId} style={{color:item.color}}>
                                {item.text.split('').map((char:string, charId:number) => {
                                    return <span 
                                            className={
                                                displayIdx === textId ?
                                                letterIdx <= charId ? stateList[1]: stateList[2]: 
                                                displayIdx === (textId + 1) % itemList.length ?
                                                letterIdx <= charId ? stateList[2]: stateList[0]: stateList[0]
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
    </>
  );
}

function RotateLetter({letters, isDisplay}: {letters: string[], isDisplay: boolean}) {
    const stateList = ["letter out", "letter behind", "letter in"];
    const [letterState, setLetterState] = useState(new Array(letters.length).fill(0))
    useEffect(() => {

    }, [isDisplay])
    console.log(letterState);
    return (
        <>
            {letters.map((char:string, charId:number) => {
                return <span 
                        className={stateList[letterState[charId]]}
                        key={charId}>
                            {char}
                        </span>;
            })}
        </>
    );
}

export default RotateText