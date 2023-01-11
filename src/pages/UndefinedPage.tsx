import style from "styled-components";

const H1 = style.h1({
  fontSize: "2em",
});
const Message = style.p({
  color: "#eee",
});
export const UndefinedPage: React.FC = () => {
  return (
    <div>
      <H1>404 Page Not Found</H1>
      <Message>お探しのページは見つかりませんでした。</Message>
    </div>
  );
};
