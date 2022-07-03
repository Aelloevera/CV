import { useState, useEffect } from "react";
import { FakeInput } from "../style/style";
import { Search } from "react-bootstrap-icons";
const TextMouv = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Développeuse Web Web Mobile");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);
    }
  }, [index]);

  return (
    <>
      <FakeInput>
        <p>
          {" "}
          <Search />
          {text}
        </p>
      </FakeInput>
    </>
  );
};

export default TextMouv;
