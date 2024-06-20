console.log("hello, Good morning to you!!!");
// fetch ("https://jsonplaceholder.typicode.com/users")
//     .then(function (response) {
//             //  (1)
//         // console.log(response.json()); 
//             //  (Either (1) or (2))

//                 // (2)
//         return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//         });

        // using arrow function to write the above code i.e  fetch and (2)

        fetch ("https://jsonplaceholder.typicode.com/users")       
        .then ((res) => res.json ())
        .then ((data) => console.log (data));



            //  POST REQUEST
            const data = {
                title : "This is title",
                body: "This is post body",
                userId: 2
            }



            fetch ("https://jsonplaceholder.typicode.com/posts" , {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((res) => res.json())
              .then ((data)  => console.log(data));
                            
