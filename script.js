const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f77ed09310msh21f221f3007b286p1a62bajsn153190a85f11',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            document.getElementById("word").innerHTML = "Meaning of: " + response.word;
            document.getElementById("definition").innerHTML = response.definition.replace("1.","<br><b>1.</b>").replace("2.","<br><br><hr><b>2.</b>").replace("3.","<br><br><hr><b>3.</b>").replace("4.","<br><br><hr><b>4.</b>").split("5.")[0];
        })
        .catch(err => console.error(err));
}

let searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let searchinput = document.getElementById("searchinput").value;
    dictionary(searchinput);
});
