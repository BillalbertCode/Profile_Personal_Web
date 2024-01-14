import { useEffect, useState } from "react";
const useWriting = (written, repeat) => {
  const [write, setWrite] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const texto = written[textIndex];
    let timer
    if (index < texto.length) {
       timer = setInterval(() => {
        setWrite((prevWrite) => prevWrite + texto[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);

    } else if (textIndex < written.length - 1) {
      setTimeout(() => {
        setWrite('');
        setIndex(0);
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 1000);
    }
    if (repeat === true && (texto.length === index && textIndex === written.length - 1)) {
      setWrite('');
      setIndex(0);
      setTextIndex(0)
    }

    return () => {
      clearInterval(timer);
    };
  }, [index, textIndex]);

  return write;
};
export default useWriting