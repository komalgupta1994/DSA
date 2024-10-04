function findMinRoute(tsp)
{
    let sum = 0;
    let counter = 0;
    let j = 0, i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let visitedRouteList=Array(tsp.length).fill(0);
 
    // Starting from the 0th indexed
    // city i.e., the first city
    visitedRouteList[0] = 1;
    let route = Array(tsp.length);
 
    // Traverse the adjacency
    // matrix tsp[][]
    while (i < tsp.length && j < tsp[i].length)
    {
 
        // Corner of the Matrix
        if (counter >= tsp[i].length - 1)
        {
            break;
        }
 
        // If this path is unvisited then
        // and if the cost is less then
        // update the cost
        if (j != i && (visitedRouteList[j] == 0))
        {
            if (tsp[i][j] < min)
            {
                min = tsp[i][j];
                route[counter] = j + 1;
            }
        }
        j++;
 
        // Check all paths from the
        // ith indexed city
        if (j == tsp[i].length)
        {
            console.log('route', route);
            sum += min;
            min = Number.MAX_SAFE_INTEGER;
            visitedRouteList[route[counter] - 1] = 1;
            j = 0;
            i = route[counter] - 1;
            counter++;
        }
    }
 
    // Update the ending city in array
    // from city which was last visited
    i = route[counter - 1] - 1;
 
    for (j = 0; j < tsp.length; j++)
    {
 
        if ((i != j) && tsp[i][j] < min)
        {
            min = tsp[i][j];
            route[counter] = j + 1;
        }
    }
    sum += min;
 
    // Started from the node where
    // we finished as well.
    console.log("Minimum Cost is : ");
    console.log(sum);
}
  
// Input Matrix
let tsp = [ [ -1, 10, 15, 20 ], [ 10, -1, 35, 25 ],
            [ 15, 35, -1, 30 ], [ 20, 25, 30, -1 ] ];

// Function Call
findMinRoute(tsp);