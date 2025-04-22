const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

document.getElementById("app")!.innerText = greet("World");
