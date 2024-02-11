import { useEffect, useState } from 'react'
// 0   =>   1    => 2  => 0
// out => behind => in => out
// 2s => 0.1 => 0.9s  => 2s
//   full   gradual  gradual
function RotateText({itemList} : {itemList: {text: string, color:string}[]}) {
    const stateList = ["letter out", "letter behind", "letter in"];
    const [textState, settextState] = useState(0);
    const [behindState, setBehindState] = useState(true);
    useEffect(() => {
        const id = setInterval(() => {
            setBehindState(true);
            setTimeout(() => {
                setBehindState(false);
            }, 200)
            settextState(prevState => {
                return (prevState + 1) % itemList.length;
            });
        }, 1000);

        return () => {
            clearInterval(id);
        };
      }, []);
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
                                            className={textState === textId? (behindState? stateList[1]: stateList[2])
                                                : stateList[0]}
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