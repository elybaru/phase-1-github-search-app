document.addEventListener("DOMContentLoaded", init)


function init() {
    const form = document.querySelector("#github-form")
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // console.log(form[0].value)
        gitHubSearch(form[0].value)
        form.reset();
    })
}


function gitHubSearch(searchInput) {
    console.log(searchInput)
    fetch("https://api.github.com/", {
        Accept: application / vnd.github.v3 + json
    })
        .then(resp => resp.json())

}