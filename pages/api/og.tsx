import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "edge",
}

const imageUrl = fetch(
  new URL("../../public/android-chrome-256x256.png", import.meta.url),
)
  .then((res) => res.arrayBuffer())
  .then((buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)))
  })
  .catch((error) => console.error(error))

export default async function handler() {
  const imageData = await imageUrl
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
          position: "relative",
        }}
      >
        <svg
          style={{
            position: "absolute",
            width: 1200,
            height: 600,
          }}
          fill="black"
          viewBox="0 0 1200 600"
          opacity={0.1}
        >
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="10"
              cy="10"
              r="1.6257413380501518"
              fill="#000"
            />
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          />
        </svg>
        <div tw="h-full flex items-center justify-center flex-col w-full">
          <img
            src={`data:image/png;base64,${imageData}`}
            width="172"
            height="172"
            tw="mb-4"
            style={{
              borderRadius: 128,
            }}
          />
          <p tw="text-7xl text-gray-700 mb-8">Ilya Tkachov</p>
          <button tw="bg-indigo-400 text-white font-bold items-center justify-center flex h-28 px-18 text-6xl rounded-full">
            Enter
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
