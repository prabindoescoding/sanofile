import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>sanofile : send files over the internet painlessly</title>
        <meta
          name="description"
          content="send files without pain in the ass."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
