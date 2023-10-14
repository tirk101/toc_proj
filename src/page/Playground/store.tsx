//   const tile = state.find((item) => item.id === tileId);
  //   const path = tile.path;
  //   const oppositeWay = {'up':'down', 'down':'up', 'left':'right', 'right':'left'}
  //   if(!stack.some(item=> item.id === tileId))
  //   {
  //     stack.push({id:tileId, pathTaken: [oppositeWay[data[data.length-1]]]});
  //   }
  //   else if(stack[stack.length -1].id === tileId)
  //   {
  //     console.log('path test1')
  //     if (path.filter((item) => !stack[stack.length -1].pathTaken.includes(item)).length === 0) {
  //       console.log('path test2')
  //       const thereIsWay = stack.some(item=> item.id !== 'z' && item.pathTaken.length !== 3)
  //       console.log('test stack -----',stack)
  //       console.log(thereIsWay)
  //       if (thereIsWay)
  //       {
          
  //         console.log('there is way')
  //           const possible = stack[stack.length -1].pathTaken[0];
  //           if(possible === 'right')
  //         {
  //           console.log('there is way right')
  //             const board = boardData.find((item) => item.id === String.fromCharCode(ypos)+String.fromCharCode(xpos+1))
  //             if(board === undefined || board.tileId === 'null') {data.push('nopath'); return;};
  //             const {state} = tileTypeMap[board.tileType];
  //             const item = state.find((item) => item.id === board?.tileId);
  //             if(item.path.includes('left'))
  //             {
  //               data.push('right')
  //               startingBoard = board;
  //             }
  //             else
  //             {
  //               data.push('nopath');
  //             }
  //           }
  //           else if(possible === 'left')
  //           {
  //             console.log('there is way left')
  //             const board = boardData.find((item) => item.id === String.fromCharCode(ypos)+String.fromCharCode(xpos-1))
  //             if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //             const {state} = tileTypeMap[board.tileType];
  //             const item = state.find((item) => item.id === board?.tileId);
  //             if(item.path.includes('right'))
  //             {
  //               data.push('left')
  //               startingBoard = board;
  //             }
  //             else
  //             {
  //               data.push('nopath');
  //             }
  //           }
  //           else if(possible === 'up')
  //           {
  //             console.log('there is way up')
  //             const board = boardData.find((item) => item.id === String.fromCharCode(ypos-1)+String.fromCharCode(xpos))
  //             if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //             const {state} = tileTypeMap[board.tileType];
  //             const item = state.find((item) => item.id === board?.tileId);
  //             if(item.path.includes('down'))
  //             {
  //               data.push('up')
  //               startingBoard = board;
  //             }
  //             else
  //             {
  //               data.push('nopath');
  //             }
  //           }
  //           else if(possible === 'down')
  //           {
  //             console.log('there is way down')
  //             const board = boardData.find((item) => item.id === String.fromCharCode(ypos+1)+String.fromCharCode(xpos))
  //             if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //             const {state} = tileTypeMap[board.tileType];
  //             const item = state.find((item) => item.id === board?.tileId);
  //             if(item.path.includes('up'))
  //             {
  //               data.push('down')
  //               startingBoard = board;
  //             }
  //             else
  //             {
  //               data.push('nopath');
  //             }
  //           }
  //           console.log('pop pls')
  //           stack.pop();
  //           return;
  //       }
  //       else
  //       {
  //         console.log('bruh')
  //         data.push('gameover');
  //         return;
  //       }
  //     }
  //   }

  //   const findStack = stack.find((item) => item.id === tileId);
  //   const possiblePath = path.filter((item) => !findStack.pathTaken.includes(item));
  //   stack[stack.length -1].pathTaken.push(possiblePath[0]);


  //   if(possiblePath[0] === 'right')
  //  {
  //     const board = boardData.find((item) => item.id === String.fromCharCode(ypos)+String.fromCharCode(xpos+1))
  //     if(board === undefined || board.tileId === 'null') {data.push('nopath'); return;};
  //     const {state} = tileTypeMap[board.tileType];
  //     const item = state.find((item) => item.id === board?.tileId);
  //     if(item.path.includes('left'))
  //     {
  //       data.push('right')
  //       startingBoard = board;
  //     }
  //     else
  //     {
  //       data.push('nopath');
  //     }
  //   }
  //   else if(possiblePath[0] === 'left')
  //   {
  //     const board = boardData.find((item) => item.id === String.fromCharCode(ypos)+String.fromCharCode(xpos-1))
  //     if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //     const {state} = tileTypeMap[board.tileType];
  //     const item = state.find((item) => item.id === board?.tileId);
  //     if(item.path.includes('right'))
  //     {
  //       data.push('left')
  //       startingBoard = board;
  //     }
  //     else
  //     {
  //       data.push('nopath');
  //     }
  //   }
  //   else if(possiblePath[0] === 'up')
  //   {
  //     const board = boardData.find((item) => item.id === String.fromCharCode(ypos-1)+String.fromCharCode(xpos))
  //     if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //     const {state} = tileTypeMap[board.tileType];
  //     const item = state.find((item) => item.id === board?.tileId);
  //     if(item.path.includes('down'))
  //     {
  //       data.push('up')
  //       startingBoard = board;
  //     }
  //     else
  //     {
  //       data.push('nopath');
  //     }
  //   }
  //   else if(possiblePath[0] === 'down')
  //   {
  //     const board = boardData.find((item) => item.id === String.fromCharCode(ypos+1)+String.fromCharCode(xpos))
  //     if(board === undefined  || board.tileId === 'null') {data.push('nopath'); return;};
  //     const {state} = tileTypeMap[board.tileType];
  //     const item = state.find((item) => item.id === board?.tileId);
  //     if(item.path.includes('up'))
  //     {
  //       data.push('down')
  //       startingBoard = board;
  //     }
  //     else
  //     {
  //       data.push('nopath');
  //     }
  //   }