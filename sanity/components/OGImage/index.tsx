import React, {useEffect, useState} from 'react'
import styles from './index.module.css'
import {useClient} from 'sanity'
import {EditorLayout, MediaLayoutComponent} from 'sanity-plugin-asset-source-ogimage'

type FormData = {
  primaryColor?: string
}

type DocumentData = {
  _id: string
}

type Data = {
  title?: string
  categories?: string[]
  image?: string
  logo?: string
}

const Component: MediaLayoutComponent<FormData, DocumentData> = ({
  document,
  formData: {primaryColor = '#F4A261'},
}) => {
  const [data, setData] = useState<Data | null>(null)

  const client = useClient({apiVersion: '2021-05-07'})

  // Fetch all the data of this document
  useEffect(() => {
    const getData = async () => {
      const data = await client.fetch(
        `
          {
          ...*[_id == $_id][0] {
            title,
                  "categories": categories[]->name,
                  "image": mockup.asset->url,
          },
    
          // Get logo from site settings
          ...*[_type == "siteSettings"][0] {
              "logo": logo.asset->url
          }
        }
      `,
        {_id: document._id},
      )

      setData(data)
    }

    getData()
  }, [])

  if (!data) return <h1>loading...</h1>

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>{data.title}</h1>
        {data.categories && (
          <div className={styles.categories}>
            {data.categories.map((c, i) => (
              <span key={i} style={{backgroundColor: primaryColor}}>
                {c}
              </span>
            ))}
          </div>
        )}
        {data.image && <img className={styles.mockup} src={data.image} />}
        {data.logo && <img className={styles.logo} src={data.logo} />}
      </div>
    </div>
  )
}

const layout: EditorLayout<FormData, DocumentData> = {
  name: 'ogImage1200',
  component: Component,
  fields: [
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: `Css color (e.g. orange), hex (e.g. #F4A261) or rgb (e.g. rgb(244, 162, 97))`,
    },
  ],
  dimensions: {
    width: 1200,
    height: 630,
  },
}

export default layout
