const stackCreate = () => ({
    arr: [ ]
  });

function stackEmpty(stack) {
    if (stack.arr == 0 )
    return true;
    else return false;
  }

function stackPush(stack, data) {
    let i = stack.arr.length;
    stack.arr[i] = data;
}

function stackPeek(stack){
    let i = stack.arr.length;
    console.log(stack.arr[i-1]);
}

function stackPop(stack){
    console.log('pop!');
    let i = stack.arr.length;
    delete stack.arr[i-1];
}

stack = stackCreate(); //스택 생성
stackPush(stack, 100);
stackPush(stack, 200);
stackPush(stack, 300);
stackPush(stack, 400);
//stackPeek(stack);
console.log(stack.arr); //배열 출력
console.log(stack.arr.length); //길이 출력
//stackPeek(stack);
stackPop(stack);
console.log(stack.arr); //길이 출력