import React from "react";

import { getClient } from "./lib/client";
import { useQuery, gql } from "@apollo/client";

interface Country {
  code: string;
  emoji: string;
  name: string;
}

const query = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export default async function Page() {
  const { data, loading, error } = await getClient().query({ query });

  if (loading) {
    return <h2>로딩중</h2>;
  }

  if (error) {
    return <h2>에러 발생!!!</h2>;
  }

  const countries = data?.countries.slice(0, 4);

  return (
    <div>
      {countries?.map((country: Country, idx: number) => (
        <div key={`country-${idx}`}>
          {country.code} / {country.emoji} / {country.name}
        </div>
      ))}
    </div>
  );
}
