
//movements all at once 
function init(){
    const redMove = moveElement(document.querySelector('#red-source'), { x: 20, y: 300 });
    const blueMove = moveElement(document.querySelector('#blue-source'), { x: 400, y: 300 });
    const greenMove = moveElement(document.querySelector('#green-source'), { x: 400, y: 20 });

    const translateAllAtOnce = async function(){
        const result = await Promise.all([redMove, blueMove,greenMove]);
        console.log('All elements have been moved',result);
        return result;
    };
    translateAllAtOnce();
}
init();



// movements one by one

const translateOneByOne = async () => {
    const promise_1 = await moveElement(document.querySelector('#red-source'), { x: 20, y: 300 });
    console.log('Red element moved', promise_1);
    const promise_2 = await (moveElement(document.querySelector('#blue-source'), { x: 400, y: 300 }));
    console.log('Blue element has been moved', promise_2);
    const promise_3 = await (moveElement(document.querySelector('#green-source'), { x: 400, y: 20 }));
    console.log('Green element has been moved', promise_3);
}
translateOneByOne();