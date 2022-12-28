import ExternalLink from "@/modules/components/ExternalLink/ExternalLink"
import { GITHUB } from "@/modules/constants"

export default function Home() {
  return (
    <>
      <div className="flex fixed items-center justify-center left-0 top-0">
        <ExternalLink href={GITHUB}>
          <p className="p-1 text-xs text-black">github</p>
        </ExternalLink>
      </div>
      <div className="flex pointer-events-none fixed items-center justify-center left-0 bottom-0 ">
        <p className="p-1 text-xs text-black">i9v.com</p>
      </div>
    </>
  )
}
