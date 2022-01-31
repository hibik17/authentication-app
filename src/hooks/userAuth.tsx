import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";

export const UserAuth = () => {
  const history = useHistory();

  // データ取得中のstateの宣言
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((result) => {
          if (result.data) {
            history.push("/home");
          } else {
            alert("ユーザーが見つかりませんでした。");
          }
        })
        .catch((error) => {
          alert("ユーザーが見つかりません");
        })
        .finally(() => setLoading(false));
    },
    [history]
  );

  return { login, loading };
};
