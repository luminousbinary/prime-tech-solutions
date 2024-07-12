import { Image } from '@mantine/core'
export default function ImageDefaults({hit, sorc}) {
    

return(
    <>
     <Image
      styles={{
        root: {
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        },
      }}
      className="rounded-lg imgDflt"
      src={sorc?sorc:"/images/hero image.png"}
      h={hit? hit:130}
      alt="courseLogo"
      fit="cover"
    />
    </>
)

}