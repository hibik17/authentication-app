/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  // axiosを叩いている時にloadingかどうかを見極めるstate
  const [loading, setLoading] = useState(false);
  // axiosで叩いて帰ってきたuserのデータを格納しておくstate
  const [users, setUsers] = useState<Array<User>>([]);

  // axiosでerrorを検知した際に、メッセージを表示するために使用
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        showMessage({ title: "ユーザーの取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, users, getUsers };
};
