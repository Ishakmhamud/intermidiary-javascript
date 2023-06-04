// Map = Map is something that can applied in array where MAP take one value of array do add / square of value then return it and then take another value do the same , return the whole result in a array. 

// Filter = Filter is used for selecting some value form array according to condition and return result in array.

// find = Find is almost same like filter, select a value from array accornding  to condition and return one value.





// if i want to square of the arrow numbers than i used to do this old method

                // const  numbers = [ 3, 4, 5, 6, 7, 8]
                // const output = []
                // for (let i = 0; i < numbers.length; i++) {
                //     const element = numbers[i];
                //     const result = element * element
                //     output.push(result)
                // }

                // console.log(output)

// new method of doing the same thing ( MAP )

            // const  numbers = [ 3, 4, 5, 6, 7, 8]

            // const result = numbers.map(element => element * element)

            // console.log(result)

// ............Filter............

        // const  numbers = [ 3, 4, 5, 6, 7, 8]

        // const BiggerNum = numbers.filter( x => x > 5)

        // console.log(BiggerNum)

// ..........Find...................

const  numbers = [ 3, 4, 5, 6, 7, 8]

const SmallNum = numbers.find( x => x < 5)

console.log(SmallNum)
