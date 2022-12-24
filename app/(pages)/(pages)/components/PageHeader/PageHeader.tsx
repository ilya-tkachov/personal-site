"use client"

import useThemeConfig from "@/modules/hooks/useThemeConfig"
import ShapeIcon from "@/modules/three/ShapeIcon/ShapeIcon"
import ShapeIconCanvas from "@/modules/three/ShapeIconCanvas/ShapeIconCanvas"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PageHeader(): JSX.Element {
  const pathname = usePathname()
  const config = useThemeConfig()

  const pathLabel = pathname?.replace("/", "")

  return (
    <div className="flex items-center justify-between overflow-visible">
      <div className="relative overflow-visible">
        <p className={`text-gray-100 text-4xl font-bold absolute top-1 left-1`}>
          {pathLabel}
        </p>
        <p className={`text-gray-300 text-4xl font-bold relative`}>
          {pathLabel}
        </p>
      </div>
      <Link href="/">
        <div className={`w-9 h-9 ring-1 ring-gray-300 rounded-full`}>
          <ShapeIconCanvas>
            <ShapeIcon shape="Dodecahedron">
              <meshPhongMaterial
                color={config?.theme?.colors.gray[500]}
                emissive={config?.theme?.colors.gray[700]}
                shininess={50}
                specular={config?.theme?.colors.gray[700]}
              />
            </ShapeIcon>
          </ShapeIconCanvas>
        </div>
      </Link>
    </div>
  )
}
