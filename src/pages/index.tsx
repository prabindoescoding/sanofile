import { UploadButton } from "@uploadthing/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import type { OurFileRouter } from "~/server/uploadthing";

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

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
      <OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
    </>
  );
}
