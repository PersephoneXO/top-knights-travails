//main knightMoves() function
export function knightMoves(start,target){
    let visitedIndexes=movesQueue(start,target);
    let theShortestPath=shortestPath(visitedIndexes,start,target);

    console.log(`You made it in ${theShortestPath.length-1} moves! Here's your path:`)
    for(const each of theShortestPath){
        console.log(each);
    }
}

//helper functions

 //function that returns an array of every possible location the knight can get move to from a specified square
function possibleMoves(index){
    let allMoves=[];
    if(index[1]<=5){
        if(index[0]<7){
            allMoves.push([index[0]+1,index[1]+2]);
        }
        if(index[0]>0){
            allMoves.push([index[0]-1,index[1]+2]);
        }
    }
    if(index[1]>=2){
        if(index[0]<7){
            allMoves.push([index[0]+1,index[1]-2]);
        }
        if(index[0]>0){
            allMoves.push([index[0]-1,index[1]-2]);
        }
    }
    if(index[0]<=5){
        if(index[1]<7){
            allMoves.push([index[0]+2,index[1]+1]);
        }
        if(index[1]>0){
            allMoves.push([index[0]+2,index[1]-1]);
        }
    }
    if(index[1]>=2){
        if(index[0]<7){
            allMoves.push([index[0]-2,index[1]+1]);
        }
        if(index[0]>0){
            allMoves.push([index[0]-2,index[1]-1]);
        }
    }
    return allMoves;
}

//function that makes its way through a queue and analyzes the input
function movesQueue(start,target){
    let queue=[start];
    let visited=[];
    let reachedTarget=false;
    while(!reachedTarget && queue.length>0){
        let currentIndex=queue.shift();
        visited.push(currentIndex);

        //check if the current index is the target
        if(currentIndex[0]==target[0]&&currentIndex[1]==target[1]){
            reachedTarget=true;
        }

        //get possible moves from the current index
        let indexMoves=possibleMoves(currentIndex);
        for(const each of indexMoves){
            if(!visited.some(([x,y])=>x===each[0]&&y===each[1])){
                queue.push(each);
            }
        }
    }
    return visited;
 }

 //function that sorts through an array of the visited indexes and finds the shortest path
function shortestPath(visitedIndexes,start,target){
    let queue=[[start]];
    while(queue.length>0){
        let path=queue.shift();
        //console.log(path);
        let currentIndex=path[path.length-1];
        //console.log(currentIndex);
        if(currentIndex[0]===target[0] && currentIndex[1]===target[1]){
            return path;
        }
        let currentPossibleMoves=possibleMoves(currentIndex);
        //console.log(currentPossibleMoves);
        for(const move of currentPossibleMoves){
            if(visitedIndexes.some(([x,y])=>x===move[0] && y===move[1])){
                let newPath=[...path,move];
                queue.push(newPath);
            }
        }
    }
    return null;
}


/*
let test=movesQueue([0,0],[3,3]);
console.log(test);
*/

knightMoves([3,3],[4,3]);
