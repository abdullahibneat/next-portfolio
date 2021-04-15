import { FunctionComponent } from "react"
import { getImage } from "@sanityClient"
import styles from "@styles/Image.module.css"
import { ImageOptions, SanityImage } from "types"

type Props = {
    className?: string,
    src?: string,
    asset: SanityImage,
    alt?: string,
    imgOptions?: ImageOptions,
    lazyLoad?: boolean
}

const Image: FunctionComponent<Props> = ({ className = "", src, asset, alt = "", imgOptions = {}, lazyLoad = true }) => {
    return <div className={className}>
        <img className={styles.image} src={src || getImage(asset, imgOptions)} alt={alt} loading={lazyLoad? "lazy" : "eager"} />
        {alt && <p className={styles.alt}>{alt}</p>}
    </div>
}

export default Image