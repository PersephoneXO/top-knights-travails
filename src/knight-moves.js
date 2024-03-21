//main knightMoves() function
 export function knightMoves(start,end){

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
