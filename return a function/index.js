

function createFunction() {
    function multiplyBy2(num){
        return num * 2
    }
    return multiplyBy2
}


const generatedFunnc = createFunction()
const result = generatedFunnc(3)