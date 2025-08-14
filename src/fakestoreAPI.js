export default function getAllProducts(){
    const data = fetch('https://fakestoreapi.com/products')
    .then(response => {
        if(!response.ok){
            throw new Error();
        }

        return response.json();
    })
    .then(parsedData => {
        return parsedData;
    })
    .catch(error => {
        console.log("Fetch error: "+error);
    });

    return data
}