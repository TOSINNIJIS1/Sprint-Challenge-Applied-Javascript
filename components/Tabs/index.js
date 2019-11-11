// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const data = response.data;
    console.log(data)

    
    const newTab = document.querySelector('.topics');
    data.topics.forEach(e => {
    newTab.appendChild(tabs(e))
    });

})


function tabs (allTopics){
    const topic = document.createElement('div');

    topic.classList.add('tab');

    topic.textContent = allTopics;

    return topic;
}
