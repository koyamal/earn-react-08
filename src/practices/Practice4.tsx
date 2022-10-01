export const Practice4 = () => {
  const calTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calTotalFee(1000);
  };
  return (
    <div>
      <p>Practice4:Edit config file</p>
      <button onClick={onClickPractice}>Practice4 start</button>
    </div>
  );
};
