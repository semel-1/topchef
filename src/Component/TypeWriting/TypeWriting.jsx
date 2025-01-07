import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriting = () => {
  const [text] = useTypewriter({
    words: ['Main', 'Drinks', 'Desserts'],
    loop: true, // Set to true for infinite looping
    typeSpeed: 120,
    deleteSpeed: 50, // Speed for deleting characters
    delaySpeed: 1500, // Delay before starting to type again
  });

  return (
    <div>
      <h1 className="text-yellow-300 font-bold text-3xl  md:text-4xl lg:text-5xl text-center" >
        {text}
        <Cursor />
      </h1>
    </div>
  );
};

export default TypeWriting;
