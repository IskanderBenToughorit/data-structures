function closestSumToZero(arr) {
    arr.sort((a, b) => a - b); // Tri des éléments
    let left = 0, right = arr.length - 1;
    let closestSum = Infinity;

    while (left < right) {
        const sum = arr[left] + arr[right];

        // Mise à jour de la somme la plus proche de zéro
        if (
            Math.abs(sum) < Math.abs(closestSum) || 
            (Math.abs(sum) === Math.abs(closestSum) && sum > closestSum)
        ) {
            closestSum = sum;
        }

        // Ajustement des pointeurs
        if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return closestSum;
}

// Exemples
console.log(closestSumToZero([1, 4, -5, 3, -2, 10, -6, 20])); // 1
console.log(closestSumToZero([-5, 5]));                      // 0
console.log(closestSumToZero([5, 8]));                       // 13
console.log(closestSumToZero([-5, -5]));                     // -10
