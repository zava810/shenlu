import Link from 'next/link'

const CustomLink = (props: any) => {
  const { href } = props
  if (!href.startsWith('/') && !href.startsWith('#')) {
    props = {
      target: '_blank',
      rel: 'noopener noreferrer',
      ...props
    }
  }

  return <Link {...props} />
}

export default CustomLink
