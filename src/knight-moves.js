//main knightMoves() function
 export function knightMoves(start,target){

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
    while(!reachedTarget){
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

 console.log(movesQueue([0,0],[3,3]));
