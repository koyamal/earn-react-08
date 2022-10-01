export const Practice1 = () => {
  const calTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calTotalFee(1000);
  };
  return (
    <div>
      <p>Practice1:Type of argument</p>
      <button onClick={onClickPractice}>Practice1 start</button>
    </div>
  );
};
