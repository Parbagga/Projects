import "./App.css";
import PasswordGenerator from "./Components/password/PasswordGenerator";
import EmailSubs from "./Components/emailStyling/EmailSubs";
import Footer from "./Components/footer practise/Footer";

function App() {
  return (
    <div
      className="App bg-gradient-to-bl from-rose-100 to-teal-100 h-screen font-sans
    "
    >
      <EmailSubs />
      <PasswordGenerator />
      <Footer />
    </div>
  );
}

export default App;
