import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const UserAuth = () => {
  const history = useHistory();

  // データ取得中のstateの宣言
  const [loading, setLoading] = useState(false);
  // toastのログイン後の成功のメッセージをimportをして使用をする
  const { showMessage } = useMessage();

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((result) => {
          if (result.data) {
            showMessage({ title: "ログインに成功しました", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません",
              status: "warning",
            });
          }
        })
        .catch((error) => {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        })
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );

  return { login, loading };
};
