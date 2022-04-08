// images
import logo from "../assets/images/eika_logo.png";
import banner from "../assets/images/welcome_image.png";

export default function WelcomeScreen({ modalState }) {
  const [isModal, setIsModal] = modalState;

  return (
    <section className="container-920 container-column" id="welcome-screen">
      <img src={logo} alt="eika branding logo" className="logo" />
      <img
        src={banner}
        alt="illustration of online task list"
        className="banner"
      />
      <div className="container-content">
        <div className="title">
          <h1>Welcome to Eika Shopping</h1>
        </div>
        <div className="content">
          <p>
            Welcome to EIKA's shopping list. Here you will be able to create a
            todo list with for the furniture you want to buy
          </p>
          <p>
            To get started press the Add new item button and a popup will ask
            you the name and the price of the item you want to add.
          </p>
          <button className="btn btn-primary" onClick={() => setIsModal(true)}>
            Add item
          </button>
        </div>
      </div>
    </section>
  );
}
