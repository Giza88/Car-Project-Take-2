/**
 * A React component that displays a heading text.
 *
 * @param {{ title: string }} props
 * An object containing the heading text to display.
 * If not provided, defaults to "Default Heading"
 * @returns {React.ReactElement} A React element displaying the heading text
 */
function HeadingText({ title = 'Default Heading' }) {
  return <h1 className="heading-text">{title}</h1>;
}
export default HeadingText;