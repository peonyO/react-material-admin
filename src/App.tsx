import { memo, useCallback, useState } from "react";

const CountButton = memo(function CountButton({
  onClick,
  count,
  cmpName
}: {
  onClick: () => void;
  count: number;
  cmpName: string;
}) {
  console.log(cmpName, count);
  return <button onClick={onClick}>{count}</button>;
});

const App = () => {
  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1(c => c + 1), []);

  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2(c => c + 1), []);

  return (
    <>
      <CountButton cmpName="1" count={count1} onClick={increment1} />
      <CountButton cmpName="2" count={count2} onClick={increment2} />
    </>
  );
};

export default App;
