type Props = Omit<JSX.IntrinsicElements["a"], "target">

export default function ExternalLink(props: Props): JSX.Element {
  return <a target="_blank" {...props} />
}
