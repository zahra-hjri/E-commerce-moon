export default function Tamrin() {
  let count = 0;
  const counter = () => {
    count++;
    return count;
  };
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="w-[50%] bg-green-400 font-bold h-20 flex justify-center items-center"></div>
    </div>
  );
}
