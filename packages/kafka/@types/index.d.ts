declare module "@thminggg/kafka" {
  const createTopic: () => void;
  const consume: () => void;
  const produce: () => void;

  export { createTopic, consume, produce };
}
