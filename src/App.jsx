import BasicInfo from "./components/BasicInfo";

function App() {
  return (
    <>
      <section>
        <BasicInfo
          name="Johan Herrera"
          email="johan@gmail.com"
          dateOfBirth="08/30/2000"
          role="developer"
        />
      </section>
    </>
  );
}

export default App;
