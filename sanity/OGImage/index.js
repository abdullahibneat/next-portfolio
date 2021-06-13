import React, { useEffect, useState } from "react"
import sanityClient from "part:@sanity/base/client"
import styles from "./index.module.css"

const client = sanityClient.withConfig({apiVersion: "2021-05-07"})

// Function to return the title, categories and image of a Project document
const getFields = async _id => {
	return await client.fetch(`
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
	`, { _id })
}

const Component = ({ _id, primaryColor }) => {
    const [data, setData] = useState(null)

    // Fetch all the data of this document
    useEffect(() => {
        getFields(_id).then(fields => setData(fields))
    }, [])

    return data
        ? <div className={styles.wrapper} style={{ "--primary-color": primaryColor }}>
            
            <div className={styles.container}>
            <h1>{data.title}</h1>
            {data.categories && <div className={styles.categories}>
                {data.categories.map((c, i) => <span key={i}>{c}</span>)}
            </div>}
            {data.image && <img className={styles.mockup} src={data.image} />}
            <img className={styles.logo} src={data.logo} />
        </div>


        </div>
        : <div>loading...</div>
}

export default {
    name: "ogImage1200",
    component: Component,
    prepare: document => ({
        _id: document._id,
        primaryColor: "#F4A261"
    }),
    fields: [
        {
            name: "primaryColor",
            title: "Primary Color",
            type: "string",
            description: `Css color (e.g. orange), hex (e.g. #F4A261) or rgb (e.g. rgb(244, 162, 97))`
        }
    ],
    dimensions: {
        width: 1200,
        height: 630
    }
}