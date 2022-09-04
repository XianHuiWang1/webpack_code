function recurM(n){
    if(n ===0||n ===1){
        return 1;
    }
    return n*recurM(n-1)
}
export default recurM