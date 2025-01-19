import BasicInfo from "./components/BasicInfo";
import users from "./utils/users";

function App() {
  return (
    <>
      <section>
        {users.map((user, index) => (
          <BasicInfo key={index} {...user} />
        ))}
      </section>
    </>
  );
}

export default App;
