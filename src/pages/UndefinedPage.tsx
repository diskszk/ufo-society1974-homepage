import style from "styled-components";
import { PageHeader } from "./styles";

const Message = style.p({
  color: "#eee",
});
export const UndefinedPage: React.FC = () => {
  return (
    <div>
      <PageHeader>404 Page Not Found</PageHeader>
      <Message>お探しのページは見つかりませんでした。</Message>
    </div>
  );
};
