import TextMouv from "./TextMouv";
import { FakeInput, Name } from "../style/style";
import { Star } from "react-bootstrap-icons";
const HomePage = () => {
  return (
    <>
      <div className="head">
        <FakeInput>
          www.BienvenueSurMonCv!.com <Star />
        </FakeInput>
        <p>Page d'acueil</p>
      </div>
      <hr />
      <Name>Audrey Lequette</Name>
      <TextMouv />

      <p>Télécharger mon CV:</p>
    </>
  );
};
export default HomePage;
