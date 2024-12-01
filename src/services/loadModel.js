const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submission-ml-daffa/model-in-prod/model.json');
}

module.exports = loadModel;