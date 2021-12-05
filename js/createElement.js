function create(element, className = '', content = '') {
  const elem = document.createElement(element);
  elem.className = className;
  elem.textContent = content;
  return elem;
}
const addChild = (child, parent) => {
  const result = parent.appendChild(child);
  return result;
};
export { create, addChild };
