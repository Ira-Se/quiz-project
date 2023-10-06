export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <div>
      <h2>{topic}</h2>
      <button onClick={() => onDelete(id)}>Delete</button>
      <div>
        <p>Level: {level}</p>
        <p>Time: {time} min</p>
        <p>Qurstions: {questions}</p>
      </div>
    </div>
  );
};
