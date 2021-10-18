import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import styles from "./galleryTest.module.css";

const TestComponent = ({ number }) => {
  return <div className={styles.childrenContainer}>{number}</div>;
};
const childrenTest = [
  <TestComponent number={1} />,
  <TestComponent number={2} />,
  <TestComponent number={3} />,
  <TestComponent number={5} />,
  <TestComponent number={6} />,
  <TestComponent number={7} />,
  <TestComponent number={8} />,
  <TestComponent number={9} />,
  <TestComponent number={10} />,
  <TestComponent number={11} />,
];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>Gallery Item</p>
        </header>
      </div>
      <div className={styles.container}>
        <Gallery
          isFluid={false}
          //containerStyles={styles.testContainerStyles}
          //childrenContainerStyles={styles.testContainerStyles}
        >
          {childrenTest}
        </Gallery>
      </div>
    </>
  );
}

export default App;
