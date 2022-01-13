// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    for (index in matrix) {
        index % 2 === 0
            ? result.push(...matrix[index])
            : result.push(...matrix[index].reverse());
    }
    return result;
};
