type Props = {
  description: string;
};

// TODO: ファイルを消す
export const Description: React.FC<Props> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};
