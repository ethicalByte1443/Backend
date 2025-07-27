async function fetchData() {
    try {
        // Simulate an asynchronous operation (e.g., fetching data)
        console.log("Hello1");
        console.log("Hello2");
        console.log("Hello3");
        console.log("Hello4");
        console.log("Aseem");
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 5000);
            
        });

        
        console.log(result);
        
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
fetchData();

console.log("hello5");
            console.log("hello9");
            console.log("hello8");
            console.log("hello6");
            console.log("hello9");
            console.log("hello8");
            console.log("hello6");
            console.log("hello7");

() => {
    console.log("Function1");
}

function1 (() => {
    console.log("function2");
})

const func = abc (()=>{
    console.log("Function3");
})




