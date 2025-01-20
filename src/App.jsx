import BasicInfo from "./components/BasicInfo";
import users from "./utils/users";
import "./css/styles.css";

function App() {
  return (
    <>
      <section className="container">
        {users.map((user, index) => (
          <BasicInfo key={index} {...user} />
        ))}
      </section>
    </>
  );
}

export default App;
