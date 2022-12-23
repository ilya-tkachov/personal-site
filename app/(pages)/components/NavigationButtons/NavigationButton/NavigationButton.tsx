import Button from "@/modules/components/Button/Button"
import useThemeConfig from "@/modules/hooks/useThemeConfig"
import ShapeIcon, { ShapeIconProps } from "@/modules/three/ShapeIcon/ShapeIcon"
import ShapeIconCanvas from "@/modules/three/ShapeIconCanvas/ShapeIconCanvas"
import Link, { LinkProps } from "next/link"

interface Props
  extends Pick<LinkProps, "href">,
    Pick<ShapeIconProps, "shape"> {}

export default function NavigationButton(props: Props): JSX.Element {
  const { href, shape } = props

  const config: any = useThemeConfig()

  return (
    <Link href={href}>
      <Button
        size="lg"
        className="shadow-full pointer-events-auto bg-white rounded-full text-gray-700 "
      >
        <div className="mr-2 ring-gray-300 rounded-full ring-1 w-8 h-8">
          <ShapeIconCanvas>
            <ShapeIcon shape={shape}>
              <meshPhongMaterial
                wireframe
                color={config?.theme?.colors.gray[700]}
                emissive={config?.theme?.colors.gray[900]}
                shininess={10}
                specular={config?.theme?.colors.gray[500]}
              />
            </ShapeIcon>
          </ShapeIconCanvas>
        </div>
        <>{href}</>
      </Button>
    </Link>
  )
}
