function arr_len(arr: number[]): number {
    let count: number = 0;
    for (let i: number = 0; arr[i] !== undefined; i++) {
        count++
    }
    return count;
}

function swap(arr: number[], first_index: number, second_index: number): number[] {
    let tmp: number = 0;
    for (let i: number = 0; i < arr_len(arr) - 1; i++) {
        for (let j: number = 1; j < arr_len(arr); j++) {
            tmp = arr[first_index];
            arr[first_index] = arr[second_index];
            arr[second_index] = tmp;
        }
    }
    return arr;
}

function towerOfHanoi(): void {
    let firstTower: number[] = [1, 2, 3];
    let secondTower: number[] = [];
    let thirdTower: number[] = [];

    push(secondTower,firstTower[arr_len(firstTower)-1])
    pop(firstTower);
    push (thirdTower,firstTower[arr_len(firstTower)-1])
    pop(firstTower);
    console.log("First Tower:",firstTower);
    console.log("Second Tower:",secondTower);
    console.log("Third Tower:",thirdTower);
}

function push(arr: number[], index: number) {
    if (arr === undefined) {
        return 0
    }
    else {
        arr[arr_len(arr)] = index;
    }
}

function pop(arr: number[]): number {
    if (arr === undefined) {
        return 0
    }
    else {
        let removedElement = arr[arr_len(arr) - 1];
        arr.length = arr_len(arr) - 1;
        return removedElement;
    }
}

let arr: number[] = [1, 2, 3, 4];
towerOfHanoi();