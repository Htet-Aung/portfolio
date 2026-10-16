import training from '../assets/work/numpygrad/training-studio.png';
import inference from '../assets/work/numpygrad/coordinate-inference.png';
import internals from '../assets/work/numpygrad/engine-internals.png';
import comparison from '../assets/work/numpygrad/capacity-comparison.png';
import rover from '../assets/work/numpygrad/rover-mission.png';
import digits from '../assets/work/numpygrad/digit-canvas.png';

export const numpygradCaptures = {
  training: {
    image: training,
    title: 'Training a model you can inspect',
    alt: 'NumPyGrad Single Model Studio with Corridor Maze settings, a 2 to 32 to 32 to 2 ReLU network, a learned corridor boundary, training loss and validation accuracy curves, and held-out test diagnostics.',
    caption:
      'The project cover is this training workspace. The captured run selects epoch 94 by validation loss and reports 100% held-out accuracy, macro F1 1.000, Brier score 0.009, and ECE 0.021. These figures describe this synthetic-data session.',
  },
  inference: {
    image: inference,
    title: 'Probing a learned boundary at a new coordinate',
    alt: 'Coordinate sliders and preset buttons in NumPyGrad, with the origin predicted as Class 1 and probability bars showing 0.86% for Class 0 and 99.14% for Class 1.',
    caption:
      'A point selected on the map, through sliders, or from a preset runs through the same trained model. At the origin in this capture, Class 1 has a 99.14% softmax score; test points can be logged for comparison.',
  },
  internals: {
    image: internals,
    title: 'Following a prediction into the engine',
    alt: 'NumPyGrad computation trace showing logits, shifted logits and softmax probabilities, a parameter table with shapes and norms, a raw weight matrix, and layer-by-layer gradient norms.',
    caption:
      'The drawer exposes the numerical calculation, registered parameter tensors, and gradient-flow telemetry. Gradient norms come from the final training mini-batch; the restored validation checkpoint supplies inference weights.',
  },
  comparison: {
    image: comparison,
    title: 'Comparing two model configurations on the same data',
    alt: 'NumPyGrad Model Capacity Comparison with a shallow four-neuron Tanh and SGD baseline versus a two-layer 32-neuron ReLU and AdamW model, shared convergence curves, and different predictions at the origin.',
    caption:
      'Both models use the same split and mini-batch sequence. The deeper configuration learns the corridor more successfully in this session; architecture, activation, and optimizer all change, so this comparison does not isolate depth alone.',
  },
  rover: {
    image: rover,
    title: 'Turning a classifier into a navigation input',
    alt: 'NumPyGrad rover simulation showing a winding orange corridor route from a green start to a red target, sensor rays, mission controls, and a Goal Reached result with 140 steps and maximum model hazard 5.8%.',
    caption:
      'The captured mission reaches the target in 140 steps. A learned hazard field, geodesic guidance, and local sensor queries produce the route; the displayed 5.8% maximum hazard is the model’s score along this simulated run.',
  },
  digits: {
    image: digits,
    title: 'From a freehand drawing to individual digit predictions',
    alt: 'NumPyGrad drawing canvas containing handwritten digits six and seven, separate normalized digit images, a recognized sequence of 67, and per-digit softmax breakdowns.',
    caption:
      'The supplied canvas example is 67. Segmentation and normalization feed each digit into the saved MNIST MLP, which reports 100.0% and 99.8% softmax scores for these two drawings; they are session outputs, not recognition guarantees.',
  },
};

export type NumPyGradCaptureId = keyof typeof numpygradCaptures;
