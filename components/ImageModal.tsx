import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { FunctionComponent } from "react"
import Img from "next/image"
import { getImage, sanityLoader } from "@sanityClient"
import useModal from "hooks/useModal"
import styles from "@styles/ImageModal.module.css"

type Props = {
    image: SanityImageSource,
    width: number,
    height: number,
    alt?: string
}

const ImageModal: FunctionComponent<Props> = ({ image, width, height, alt }) => {
    const { Modal, show } = useModal()
    return <div>
        <Img className={styles.img} onClick={show} loader={sanityLoader} src={getImage(image)} width={width} height={height} alt={alt || ""} objectFit="contain" />
        {alt && <p className={styles.alt}>{alt}</p>}
        <Modal>
            <img className={styles.modalImg} src={getImage(image)} />
        </Modal>
    </div>
}

export default ImageModal