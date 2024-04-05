import React from "react";

import { getClient } from "./lib/client";
import { useQuery, gql } from "@apollo/client";
import "./graphology";

interface Country {
  code: string;
  emoji: string;
  name: string;
}

interface IUser {
  id: number;
  to_email: string;
  user_id: number;
}

const query = gql`
  query MyQuery {
    tb_email(distinct_on: created_date) {
      id
      to_email
      user_id
    }
    tb_settings {
      id
      language
      mail_history_size
      rowsize
    }
  }
`;

export default async function Page() {
  // const { data, loading, error } = await getClient().query({ query });
  const { data, loading, error } = await getClient().query({ query });
  // console.log(data);

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h2>에러 발생!!!</h2>;
  }

  const users = data.tb_email;

  return (
    <div>
      {users?.map((user: IUser, idx: number) => (
        <div key={idx}>
          {user.id} / {user.to_email} / {user.user_id}
        </div>
      ))}
    </div>
  );
}
