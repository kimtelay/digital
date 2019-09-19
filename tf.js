var tox = function (sentences) {  
// The minimum prediction confidence.
const threshold = 0.82;

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
toxicity.load(threshold).then(model => {
  // const sentences = ['you suck'];
console.log('SENTENCES:', sentences);
  model.classify(sentences).then(predictions => {
    // `predictions` is an array of objects, one for each prediction head,
    // that contains the raw probabilities for each input along with the
    // final prediction in `match` (either `true` or `false`).
    // If neither prediction exceeds the threshold, `match` is `null`.

    // console.log(predictions);
    
    predictions.forEach(prediction => {
        if (prediction.results[0].match && prediction.label !== 'toxicity') {
            document.getElementById('answer').textContent = prediction.label.replace('_',' ').toUpperCase() + ' against the machine! Next time I will give you an electric shock. Now shut up!'
        }
    })

    /*
    prints:
    {
      "label": "identity_attack",
      "results": [{
        "probabilities": [0.9659664034843445, 0.03403361141681671],
        "match": false
      }]
    },
    {
      "label": "insult",
      "results": [{
        "probabilities": [0.08124706149101257, 0.9187529683113098],
        "match": true
      }]
    },
    ...
     */
  });
});
}
