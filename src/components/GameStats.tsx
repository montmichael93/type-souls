export const GameStats = ({
  correctCount,
  incorrectCount,
}: {
  correctCount: number;
  incorrectCount: number;
  total: number;
}) => {
  return (
    <div className="font-kode flex h-28 w-full items-center justify-between text-red-600">
      <div className="flex flex-col px-5 py-2">
        <div>
          <b className="mr-2">Total: </b>
          {correctCount + incorrectCount}
        </div>
        <div>
          <b className="mr-2">Wrong: </b>
          {incorrectCount}
        </div>
        <div>
          <b className="mr-2">Accuracy: </b>
          {Math.round((correctCount / (incorrectCount + correctCount)) * 100)}%
        </div>
      </div>
    </div>
  );
};
