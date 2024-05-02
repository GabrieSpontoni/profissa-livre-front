export default function RenderCondition({ condition, children }) {
  return condition ? children : null;
}
