export function incrementCounter(value) {
  return value + 1;
}

export function resetCounter() {
  return 0;
}

export function createCounterController(initialValue = 0) {
  let value = initialValue;

  return {
    getValue() {
      return value;
    },
    increment() {
      value = incrementCounter(value);
      return value;
    },
    reset() {
      value = resetCounter();
      return value;
    }
  };
}

export function mountCounterApp(doc = document) {
  const valueNode = doc.getElementById('counter-value');
  const incrementButton = doc.getElementById('increment-btn');
  const resetButton = doc.getElementById('reset-btn');

  if (!valueNode || !incrementButton || !resetButton) {
    return null;
  }

  const controller = createCounterController(Number(valueNode.textContent) || 0);

  const render = () => {
    valueNode.textContent = String(controller.getValue());
  };

  incrementButton.onclick = () => {
    controller.increment();
    render();
  };

  resetButton.onclick = () => {
    controller.reset();
    render();
  };

  render();
  return controller;
}

if (typeof document !== 'undefined') {
  mountCounterApp();
}
