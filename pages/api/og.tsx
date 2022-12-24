import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="space-y-4 h-full flex items-center justify-center flex-col w-full">
          <img src="/android-chrome-256x256.png" tw="w-48 h-48"></img>
          <p>image</p>
          <p tw="text-9xl text-gray-700">text</p>
          <button tw="bg-indigo-400 text-indigo-100 font-bold items-center justify-center flex h-42 px-32 text-8xl rounded-full">
            click
          </button>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}
