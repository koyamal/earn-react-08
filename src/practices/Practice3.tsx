export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <p>Practice3:Type of variables</p>
      <button onClick={onClickPractice}>Practice3 start</button>
    </div>
  );
};
