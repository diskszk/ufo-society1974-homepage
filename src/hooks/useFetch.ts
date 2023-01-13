import { useQuery, QueryFunction } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  createStartRequestAction,
  createSuccessRequestAction,
  createFailRequestAction,
} from "../store/ModalStatusReducer";

export function useFetch<T>(
  queryKey: Array<string | number>,
  queyFn: QueryFunction<T>
): {
  data: T | undefined;
} {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useQuery<T>([...queryKey], queyFn);

  if (isLoading) {
    dispatch(createStartRequestAction());
  } else {
    dispatch(createSuccessRequestAction());
  }

  if (isError) {
    dispatch(
      createFailRequestAction(
        "データの取得に失敗しました。\n通信環境をご確認の上再度お試しください。"
      )
    );
  }
  return { data };
}
